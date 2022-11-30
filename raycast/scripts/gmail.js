#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Gmail
// @raycast.mode silent

// Optional parameters:
// @raycast.icon images/gmail.png
// @raycast.packageName Link

// Documentation:
// @raycast.description Open Gmail in Google Chrome
// @raycast.author xlsama
// @raycast.authorURL https://github.com/xlsama

const { exec } = require('node:child_process')
exec(`open https://mail.google.com`)
