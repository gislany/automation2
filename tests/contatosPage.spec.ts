import { test } from '@playwright/test';
import { contatoPage } from '../locators/urlWeb.json';
import { ContatoPageComponent } from '../components/ContatoPageComponent.json';

test('Verificar se tem o componente Nome', async ({ page }) => {
    await page.goto(contatoPage);
    const contatoVisivel = await page.getByRole('link', { name: 'Nome' }).isVisible();

    if (contatoVisivel) {
        console.log('Existe o componente Nome');
    } else {
        console.error('O componente Nome não foi encontrado');
    }
});

test('Verificar se tem o componente email', async ({ page }) => {
    await page.goto(contatoPage);
    const emailVisivel = await page.getByPlaceholder('E-mail').isVisible();

    if (emailVisivel) {
        console.log('Existe o componente email');
    } else {
        console.error('O componente email não foi encontrado');
    }
});

test('Verificar se tem o componente Telefone', async ({ page }) => {
    await page.goto(contatoPage);
    const telefoneVisivel = await page.getByPlaceholder('Telefone').isVisible();

    if (telefoneVisivel) {
        console.log('Existe o componente Telefone');
    } else {
        console.error('O componente Telefone não foi encontrado');
    }
});

test('Verificar se tem o componente Assunto', async ({ page }) => {
    await page.goto(contatoPage);
    const assuntoVisivel = await page.getByPlaceholder('Assunto').isVisible();

    if (assuntoVisivel) {
        console.log('Existe o componente Assunto');
    } else {
        console.error('O componente Assunto não foi encontrado');
    }
});

test('Verificar se tem o componente Menssagem', async ({ page }) => {
    await page.goto(contatoPage);
    const menssagemVisivel = await page.getByPlaceholder('Menssagem').isVisible();

    if (menssagemVisivel) {
        console.log('Existe o componente Menssagem');
    } else {
        console.error('O componente Menssagem não foi encontrado');
    }
});
