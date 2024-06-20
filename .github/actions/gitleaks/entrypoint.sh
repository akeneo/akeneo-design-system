#!/bin/sh

# check wether we are in a pull-request workflow
if [ -z ${GITHUB_BASE_REF} ] || [ -z ${GITHUB_REF_NAME} ] ; then
  echo "::error::❌ This MUST be run from a pull-request workflow only."
  exit 1
fi

# check wether a checkout was run before this step
if [ -z ${GITHUB_WORKSPACE} ] ; then
  echo "::error::❌ a checkout MUST be run before this step and inside the same workflow."
  exit 1
fi

# check input to avoid command injections
if ! [[ ${INPUT_SOFT_FAIL} =~ "^true|false$" ]] ; then
  echo "::error::❌ The 'soft_fail' parameter MUST be a 'true' or 'false'."
  exit 1
fi

git config --system --add safe.directory ${GITHUB_WORKSPACE}

# prepare for Gitleaks command by calculating the range of commits to scan within this pull-request.
# Github variables in
# https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables
BASE_COMMIT_SHA=$(git rev-parse "refs/remotes/origin/${GITHUB_BASE_REF}")
LAST_COMMIT_SHA=$(git rev-list --no-merges -n 1 refs/remotes/pull/${GITHUB_REF_NAME})

gitleaks detect \
  --source=${GITHUB_WORKSPACE} \
  --log-opts="--no-merges --first-parent ${BASE_COMMIT_SHA}...${LAST_COMMIT_SHA}" \
  --redact \
  --verbose \
  --log-level=debug \
  --report-format=json \
  --report-path=${GITHUB_WORKSPACE}/gitleaks-report.json

_EXIT_CODE=$?

if [ ${_EXIT_CODE} -eq 0 ]; then
  echo "::notice::✅ Good job! Your code does not contain any secrets."
elif [ ${INPUT_SOFT_FAIL} = "true" ]; then
  echo "::error::❌ STOP! Gitleaks encountered leaks or errors, but we are in non-blocking mode."
  exit 0
else
  echo "::error::❌ STOP! Gitleaks encountered leaks or error"
fi

exit ${_EXIT_CODE}
