class PlaywrightDevPage {
	constructor(page) {
		this.page = page;
	}
	
	async goto() {
		await this.page.goto('https://playwright.dev');
	}
	
	async toc() {
		const text = await this.page.innerText('article ul');
		return text.split('\n').filter(line => !!line);
	}
	
	async getStarted() {
		await this.page.click('text=Get started');
		await this.page.waitForSelector(`text=Core concepts`);
	}
	
	async coreConcepts() {
		await this.getStarted();
		await this.page.click('text=Core concepts');
		await this.page.waitForSelector(`h1:has-text("Core concepts")`);
	}

}
module.exports = { PlaywrightDevPage };