# Gitleaks docker action

This action scans your pull-request commits for potentially leaked secrets before merging them into
`main` or `master` branch.

## Inputs

### `soft_fail`

**Optional** If you want to make this control non-blocking, you can use "true" as a parameter value.
>But we don't recommend that.

## Outputs

Nothing so far.

## Example usage

You can call this action within one of your workflows' jobs using the following code snippet.

```yaml
name: Pull request workflow

on: [pull_request]

permissions:
  contents: "read"

jobs:
  pre_build_checks:
    runs-on: ubuntu-latest
    steps:
      ...
      - name: "Checkout repository"
        uses: "actions/checkout@v4"
        with:
          fetch-depth: 0
      ...
      - name: "Scan for secrets"
        uses: ./.github/actions/gitleaks@main
        with:
          soft_fail: "false"
```

### Note

You must call `checkout@v4` before using this action, otherwise, it will fail. Also make sure to specify
a `fetch-depth` value equal to `0` when doing a checkout. Otherwise there are chances this action won't work.
