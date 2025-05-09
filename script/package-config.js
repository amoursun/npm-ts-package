#!/usr/bin/env zx

const fs = require('node:fs/promises');
const path = require('node:path');
const { parseArgs } = require('node:util');
const { $, chalk } = require('zx');

$.verbose = false;

async function getCurrentVersion() {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
    return packageJson.version;
}

async function getNextVersion(currentVersion, type) {
    const [major, minor, patch] = currentVersion.split('.').map(Number);
    switch (type) {
        case 'patch':
            return `${major}.${minor}.${patch + 1}`;
        case 'minor':
            return `${major}.${minor + 1}.0`;
        case 'major':
            return `${major + 1}.0.0`;
        default:
            throw new Error('Invalid version type');
    }
}

async function generateChangesetFile(bumpType, nextVersion) {
    const changesetDir = path.join(process.cwd(), '.changeset');
    const timestamp = Date.now();
    const filename = `${timestamp}-${bumpType}-release.md`;
    const content = `---
    "version-check-prompt": ${bumpType}
    ---

    Release version ${nextVersion}
    `;

    await fs.mkdir(changesetDir, { recursive: true });
    await fs.writeFile(path.join(changesetDir, filename), content);

    console.log(chalk.blue(`Generated changeset file: ${filename}`));
}

async function main() {
    try {
        // 1. Read the current version
        const currentVersion = await getCurrentVersion();
        console.log(chalk.blue(`Current version: ${currentVersion}`));

        // 2. Determine bump type and next release version
        const options = {
            type: {
                type: 'string',
                short: 't',
                default: 'patch',
            },
        };
        const args = process.argv.slice(3);
        const { values } = parseArgs({ args, options });

        const bumpType = values.type;

        if (!['major', 'minor', 'patch'].includes(bumpType)) {
            console.error('Invalid bump type. Please select major, minor, or patch.');
            process.exit(1);
        }

        console.log(chalk.blue(`Bump type: ${bumpType}`));

        const nextVersion = await getNextVersion(currentVersion, bumpType);
        console.log(chalk.blue(`Next version: ${nextVersion}`));

        // 3. Show branch
        const branchName = `main`;
        console.log(chalk.blue(`branch: ${branchName}`));

        // 4. Generate changeset file
        await generateChangesetFile(bumpType, nextVersion);

        // 5. Run changeset version
        await $`pnpm run changeset version`;

        // 6. Commit changes
        await $`git add .`;
        await $`git commit -m "Release v${nextVersion}"`;

        // 7. Push to remote repo
        await $`git push -u origin ${branchName}`;

        console.log(chalk.green(`Successfully pushed ${branchName}`));
    } catch (error) {
        console.error(chalk.red(`Error: ${error.message}`));
        process.exit(1);
    }
}

main();
