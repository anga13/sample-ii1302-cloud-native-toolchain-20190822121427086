const webdriver = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const appUrl = process.env.APP_URL || 'google.com'

describe('GUI', () => {
    let driver 
    beforeAll(() => {
        driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build()
    })
    test('Works', async () => {
        console.log(appUrl)
        await driver.get(`https://${appUrl}`)
        const msg = await driver.findElement(webdriver.By.id('app')).getText()
        expect(msg).toBe('This is the Index page')
    })
    afterAll(() => {
        driver.close()
    })
})
