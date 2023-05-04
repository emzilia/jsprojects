#!/bin/node
"use strict";
// File-system and path are required to navigate to the appropriate directory, exec to execute the commands
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const dir = '\/home\/emm\/repos';
const files = fs.readdirSync(dir);
// Function to send a notification depending on the status of the repo
function notifyFunc(gitDir, repoStatus) {
	exec(`notify-send 'Branch ${repoStatus}:' '${gitDir}'`), (err, stdout, stderr) => {
	}
};
// Loops through all folders in the /home/emm/repos directory, running git fetch and git status and calling the notifyFunc function depending on the output of git status
files.forEach(file => {
	const filePath = path.join(dir, file);
	const stats = fs.statSync(filePath);
	if (stats.isDirectory()) {
		console.log(`Entering ${filePath}`);
		exec(`cd ${filePath} && git fetch && git status`, (err, stdout, stderr) => {
			if (stdout.includes('modified')) {
				notifyFunc(filePath, 'has unstaged changes');
			} else if (stdout.includes('branch is behind')) {
				notifyFunc(filePath, 'is behind')
			} else if (stdout.includes('branch is ahead')) {
				notifyFunc(filePath, 'is ahead')
			} else if (stdout.includes('have diverged')) {
				notifyFunc(filePath, 'has diverged')
			} else if (stdout.includes('Changes to be commited')) {
				notifyFunc(filePath, 'has pending commits')
			}
        });
    }
});
