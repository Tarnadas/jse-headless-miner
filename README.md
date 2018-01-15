# Headless Chrome JSEcoin Platform Miner

This tool allows automated mining of JSEcoin without running it locally in your browser. It is a little bith tough to set up, but it just works fine.

**Notes:**

This is only possible, because the JSEcoin website uses weak authentication on solved hashes. To be more specific, it doesn't use session tokens. This allows the bypassing of the actual login process, which is blocked by reCaptcha.

This bot might easily break, if they make some changes to their JavaScript code.

## Instructions

### Git clone this repository

```bash
$ git clone https://github.com/Tarnadas/jse-headless-miner.git
```

### Get your user data

1. Go to https://platform.jsecoin.com/
2. Open Chrome Dev Tools (Ctrl + Shift + J).
3. Open Sources tab.
4. Navigate to platform.jsecoin.com/js/jsecoin.min.js?v=whatever
5. Pretty print this file.
6. Search for the string "user = JSON.parse(data)" and add a breakpoint.
7. Login on the website. The breakpoint will halt execution.
8. Check local variable called data. Copy the content of this variable into a new file called userData.json
9. Done

### Install and run

```bash
$ npm install
$ npm start
```