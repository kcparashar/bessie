# Bessie

## What is this?
[CalTime](caltimeprod.berkeley.edu) is an unfortunately complicated system to enter your hourly log as a UC Berkeley employee. To help alleviate this cognitive annoyance, this script is a way to automate logging in and out. Feel free to contribute and port to your liking. Raise an [issue](https://github.com/kcparashar/bessie/issues/new) and I'll try to get back to you ask quick as I can!

---
## How To Use
### Dependencies
- `node.js`
- `phantom.js`
- `cron` (Optional)


### Step-by-Step
1. Open `Terminal.app` or your favorite UNIX shell.

2. Navigate to the directory you prefer to have the files in with `cd`. For example `cd ~/Documents/Projects/`.
3. Clone this repo with `git clone https://github.com/kcparashar/bessie.git`
4. Go into directory with `cd bessie/`.
5. 
  - (a) Install node packages with `npm install`.
  - (b) (*upon first use*) Open the `config.json` with your favorite text editor. For example `nano config.json`. Then replace the `<USERNAME>` and `<PASSWORD>` with your actual credentials. 
6. Run the app with `npm start` or `node bessie.js`.

---
### Automatic Hours with `cron` (Optional)
If you prefer to save your self the hassle of running this script, you can choose to automate it with `cron` a UNIX utliity that lets you run background task on schedule. 

This is best paired with a server, for which I recommend [DigitalOcean](https://m.do.co/c/3ad22fa86c99) (referral link with $10 credit). 

To use `cron` you must first open a *crontab*. [Corenominal](https://corenominal.org/2016/05/12/howto-setup-a-crontab-file/) provides a useful guide. 

Then enter in the options from below or write a custom entry. 

#### 40 Hour Work Week
`cron 00 09,17 * * 1-5 node bessie.js`

#### 30 Hour Work Week
`cron 00 09,15 * * 1-5 node bessie.js`

#### 20 Hour Work Week
`cron 00 09,13 * * 1-5 node bessie.js`

#### 10 Hour Work Week
`cron 00 09,11 * * 1-5 node bessie.js`

---
### FAQ

**Q.** This doesn't seem to be working on my Linux Server! Help?

**A.** Try [this fix](https://github.com/segmentio/nightmare/issues/224#issuecomment-141575361).


---
That’s it! Enjoy your automatic hours entry. 

Please feel free [to contribute](https://github.com/kcparashar/bessie/pulls), [add an issue](https://github.com/kcparashar/bessie/issues/new), or [email me](mailto:kcparashar+bessie@gmail.com).
