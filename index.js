const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

const userData = require('./userData.json');

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  })
  const page = await browser.newPage()
  page.on('console', msg => {
    console.log(msg.text())
  })
  await page.goto('https://platform.jsecoin.com/')
  await page.evaluate(userData => {
    user = userData
    startMining()
    setTimeout(() => {
      refreshUser(() => {
        console.log('-- refreshed session --')
      })
    }, 60000)
  }, userData)
})()
