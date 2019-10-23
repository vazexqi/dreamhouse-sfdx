#! /usr/bin/env node

const issueUrl = process.argv[2];
process.stdout.write(issueUrl.substring(issueUrl.lastIndexOf('/') + 1, issueUrl.length));
