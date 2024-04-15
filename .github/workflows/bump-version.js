
'use strict';

const {execSync} = require('child_process');
const fs = require('fs');

const externalPackageJson = process.argv[2];
const commitMessagesFilepath = process.argv[3];

// Let's define an enum for our bump levels
const BumpLevelEnum = {
    Patch: 0,
    Minor: 1,
    Major: 2,
}
Object.freeze(BumpLevelEnum);

// Extract the bump level to extract from the commit message
const getCommitMessageBumpLevel = (message) => {
    if (message.includes('#major')) return BumpLevelEnum.Major;
    if (message.includes('#minor')) return BumpLevelEnum.Minor;

    return BumpLevelEnum.Patch;
}

const getBumpNameFromBumpLevel = (bumpLevel) => {
    switch (bumpLevel) {
        case BumpLevelEnum.Patch:
            return 'patch';
        case BumpLevelEnum.Minor:
            return 'minor';
        case BumpLevelEnum.Major:
            return 'major';
        default:
            throw Error('Invalid bump level');
    }
}

const lastCommits = (new String(execSync(`git rev-list ${process.env.BUMP_BASE_REVISION || 'master'}..HEAD`))).split('\n');
const messages = lastCommits.map(commit => new String(execSync(`git log -n 1 --pretty=format:%s ${commit}`)));
fs.writeFileSync(commitMessagesFilepath, `Extract from ${process.env.BUMP_REVISION}\nWith commits:\n${messages.join('\n')}`);

const levelToBump = messages.reduce((currentBumpLevel, commit) => {
    const bumpLevel = getCommitMessageBumpLevel(commit);

    return bumpLevel > currentBumpLevel ? bumpLevel : currentBumpLevel;
}, BumpLevelEnum.Patch);

const externalVersion = JSON.parse(fs.readFileSync(externalPackageJson)).version

execSync(`npm --no-git-tag-version version ${externalVersion}`);
execSync(`npm --no-git-tag-version version ${getBumpNameFromBumpLevel(levelToBump)}`);
