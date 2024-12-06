import { test } from '@playwright/test';
import { servicosPage } from '../locators/urlWeb.json';
import { servicosPageComponents } from '../components/servicosPageComponents.json';

test('Ir para a página de erviços', async ({ page }) => {
    await page.goto(servicosPage);
    console.log('Existe a página União Tintas');
});
