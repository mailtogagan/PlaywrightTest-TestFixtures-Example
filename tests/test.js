const { base, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../pages/playwright-dev-page');

const test = base.test.extend({
  playwrightDev: async ({ page }, use) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await use(playwrightDev);
  },
});

test('Get Started table of contents', async ({ playwrightDev }) => {
  await playwrightDev.getStarted();
  expect(await playwrightDev.toc()).toEqual([
    'Installation',
    'Usage',
    'First script',
    'Record scripts',
    'TypeScript support',
    'System requirements',
    'Release notes'
  ]);
});

test('Core Concepts table of contents', async ({ playwrightDev }) => {
  await playwrightDev.coreConcepts();
  expect(await playwrightDev.toc()).toEqual([
    'Browser',
    'Browser contexts',
    'Pages and frames',
    'Selectors',
    'Auto-waiting',
    'Execution contexts: Playwright and Browser',
    'Evaluation Argument'
  ]);
});
