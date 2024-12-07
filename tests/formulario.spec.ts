import { test } from '@playwright/test';
import { contatoPage } from '../locators/urlWeb.json';
import { contatoComponent } from '../components/ContatoPageComponent.json';

test('Preencher e enviar o formulário de contato', async ({ page }) => {
    await page.goto(contatoPage);
  
    await page.getByPlaceholder('Nome').fill('Gislany Evellin');
    await page.getByPlaceholder('E-mail').fill('gislany@gmail.com');
    await page.getByPlaceholder('Telefone').fill('34999700512');
    await page.getByPlaceholder('Assunto').fill('Reclamação da página');
    await page.getByPlaceholder('Mensagem').fill('A página precisa de correções no desenvolvimento, principalmente na página "Contato');
  
    await page.click('xpath=//*[@id=\'wpcf7-f22-p14-o1\']/form/p[2]/input');
});
