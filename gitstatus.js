#!/bin/node

// File-system and path are required to navigate to the appropriate directory,
// exec to execute the commands
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const dir = '\/home\/cagnaccia\/repos';
const files = fs.readdirSync(dir);

// Function to send a notification depending on the status of the repo
function send_notif(gitDir, repoStatus)
{
	exec(`notify-send 'Branch ${repoStatus}:' '${gitDir}'`), (err, stdout, stderr) => {}
};

// Loops through all folders in the /home/emm/repos directory, running git fetch
// and git status and calling the send_notif function depending on the output of git status
files.forEach(file => {
	const filePath = path.join(dir, file);
	const stats = fs.statSync(filePath);
	if (stats.isDirectory()) {
		console.log(`Entering ${filePath}`);
		exec(`cd ${filePath} && git fetch && git status`, (err, stdout, stderr) => {
			if (stdout.includes('modified')) {
				send_notif(filePath, 'has unstaged changes');
			} else if (stdout.includes('branch is behind')) {
				send_notif(filePath, 'is behind')
			} else if (stdout.includes('branch is ahead')) {
				send_notif(filePath, 'is ahead')
			} else if (stdout.includes('have diverged')) {
				send_notif(filePath, 'has diverged')
			} else if (stdout.includes('Changes to be commited')) {
				send_notif(filePath, 'has pending commits')
			}
        });
    }
});
