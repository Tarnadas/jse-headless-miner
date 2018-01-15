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
3. Login on the website.
4. Print the user variable by just running `JSON.stringify(user)`
5. Copy the content of this output into a new file called userData.json
6. Done

### Install and run

```bash
$ npm install
$ npm start
```