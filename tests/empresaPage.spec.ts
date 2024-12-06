import { test } from '@playwright/test';
import { empresaPage } from '../locators/urlWeb.json';
import { empresaPageComponents } from '../components/empresaPageComponents.json';

test('Ir para a página da União Tintas', async ({ page }) => {
    await page.goto(empresaPage);
});

test('Verificar se tem o componente Telefones', async ({ page }) => {
    await page.goto(empresaPage);
    const empresaVisivel = await page.getByRole('link', { name: empresaPageComponents.telefonesComponent }).isVisible();

    if (empresaVisivel) {
        console.log('Existe o componente Telefone');
    } else {
        console.error('O componente Telefone não foi encontrado');
    }
});

test('Verificar se tem o componente Logo', async ({ page }) => {
    await page.goto(empresaPage);
    const logoempresaVisivel = await page.getByRole('link', { name: empresaPageComponents.logoComponent }).isVisible();

    if (logoempresaVisivel) {
        console.log('Existe o componente Logo');
    } else {
        console.error('O componente Logo não foi encontrado');
    }
});

test('Verificar se tem o componente Empresa', async ({ page }) => {
    await page.goto(empresaPage);
    const nomeempresaVisivel = await page.getByRole('link', { name: empresaPageComponents.empresaComponent }).isVisible();

    if (nomeempresaVisivel) {
        console.log('Existe o componente Empresa');
    } else {
        console.error('O componente Empresa não foi encontrado');
    }
});

test('Verificar se tem o componente Missão', async ({ page }) => {
    await page.goto(empresaPage);
    const missaoVisivel = await page.getByRole('link', { name: empresaPageComponents.missaoComponent }).isVisible();

    if (missaoVisivel) {
        console.log('Existe o componente Missão');
    } else {
        console.error('O componente Missão não foi encontrado');
    }
});

test('Verificar se tem o componente Loja 1 Uberlandia', async ({ page }) => {
    await page.goto(empresaPage);
    const udi1Visivel = await page.getByRole('link', { name: empresaPageComponents.lojasComponent.udiLoja1.component }).isVisible();

    if (udi1Visivel) {
        console.log('Existe o componente UdiLoja1');
    } else {
        console.error('O componente UdiLoja1 não foi encontrado');
    }
});

test('Verificar se tem o componente Loja 2 Uberlandia', async ({ page }) => {
    await page.goto(empresaPage);
    const udi2Visivel = await page.getByRole('link', { name: empresaPageComponents.lojasComponent.udiLoja2.component }).isVisible();

    if (udi2Visivel) {
        console.log('Existe o componente UdiLoja2');
    } else {
        console.error('O componente UdiLoja2 não foi encontrado');
    }
});

test('Verificar se tem o componente Loja 3 Uberlandia', async ({ page }) => {
    await page.goto(empresaPage);
    const udi3Visivel = await page.getByRole('link', { name: empresaPageComponents.lojasComponent.udiLoja3.component }).isVisible();

    if (udi3Visivel) {
        console.log('Existe o componente UdiLoja3');
    } else {
        console.error('O componente UdiLoja3 não foi encontrado');
    }
});

test('Verificar se tem o componente Loja 1 Araguari', async ({ page }) => {
    await page.goto(empresaPage);
    const ara1Visivel = await page.getByRole('link', { name: empresaPageComponents.lojasComponent.araLoja1.component }).isVisible();

    if (ara1Visivel) {
        console.log('Existe o componente araLoja1');
    } else {
        console.error('O componente araLoja1 não foi encontrado');
    }
});

test('Verificar se tem o componente Loja 2 Araguari', async ({ page }) => {
    await page.goto(empresaPage);
    const ara2Visivel = await page.getByRole('link', { name: empresaPageComponents.lojasComponent.araLoja2.component }).isVisible();

    if (ara2Visivel) {
        console.log('Existe o componente araLoja2');
    } else {
        console.error('O componente araLoja2 não foi encontrado');
    }
});