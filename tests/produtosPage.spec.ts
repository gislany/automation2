import { test } from '@playwright/test';
import { produtosPage } from '../locators/urlWeb.json';
import { produtosPageComponents } from '../components/produtosPageComponents.json';

test('Verificar se tem o componente dicas De Pintura em Produtos', async ({ page }) => {
    await page.goto(produtosPage);
    const dicasTintaVisivel = await page.getByRole('link', { name: 'Dicas de Pintura' }).isVisible();

    if (dicasTintaVisivel) {
        console.log('Existe o componente Dicas de Tintas');
    } else {
        console.error('O componente Dicas de Tintas não foi encontrado');
    }
});

test('Verificar se tem o componente Catálogo Produtos', async ({ page }) => {
    await page.goto(produtosPage);
    const catalogoVisivel = await page.getByRole('link', { name: 'Catálogo de Produtos' }).isVisible();

    if (catalogoVisivel) {
        console.log('Existe o componente Catálogo de Produtos');
    } else {
        console.error('O componente Catálogo de Produtos não foi encontrado');
    }
});

test('Verificar se tem o componente Calculadora de Tintas', async ({ page }) => {
    await page.goto(produtosPage);
    const calculadoraVisivel = await page.getByRole('link', { name: 'Calculadora de Tintas' }).isVisible();

    if (calculadoraVisivel) {
        console.log('Existe o componente Calculadora de Tintas');
    } else {
        console.error('O componente Calculadora de Tintas não foi encontrado');
    }
});

test('Verificar se tem o componente Complementos Paredes Pisos', async ({ page }) => {
    await page.goto(produtosPage);
    const plantabaixaVisivel = await page.getByText('Complementos Paredes Pisos').isVisible();

    if (plantabaixaVisivel) {
        console.log('Existe o componente Complementos Paredes Pisos');
    } else {
        console.error('O componente Complementos Paredes Pisos não foi encontrado');
    }
});
