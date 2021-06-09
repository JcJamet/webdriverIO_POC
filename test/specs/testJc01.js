const { remote } = require('webdriverio');

describe('My test 001 JC', () => {
    it('should do what i want', async() => {

        //await myFirefoxBrowser.url(baseUrl);
        await browser.url('https://webdriver.io')

        const apiLink = await browser.$('=API')
        await apiLink.click()

        await browser.saveScreenshot('./screenshot.png')
        await browser.deleteSession()
    })()
});