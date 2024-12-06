import { test } from '@playwright/test';
import { homePage } from '../locators/urlWeb.json';
import { homePageComponents } from '../components/homePageComponents.json';

test('Ir para a página da União Tintas', async ({ page }) => {
    await page.goto(homePage);
    console.log('Existe a página União Tintas');
});

test('Verificar se tem o componente Telefones', async ({ page }) => {
    await page.goto(homePage);
    const telefoneVisivel = await page.getByRole('link', { name: homePageComponents.telefonesComponent }).isVisible();

    if (telefoneVisivel) {
        console.log('Existe o componente Telefone');
    } else {
        console.error('O componente Telefone não foi encontrado');
    }
});

test('Verificar se tem o campo Contato', async ({ page }) => {
    await page.goto(homePage);
    const contatoVisivel = await page.getByRole('link', { name: homePageComponents.contatoUniaoTintasEmail }).isVisible();
    if (contatoVisivel) {
        console.log('Existe Contato');
    } else {
        console.error('Campo contato não encontrado');
    }
}
);

test('Verificar campo Ferramentas', async ({ page }) => {
    await page.goto(homePage);
    const ferramentaVisivel = await page.getByRole('link', { name: homePageComponents.ferramentasComponent.componet }).isVisible();
    if (ferramentaVisivel === true) {
        console.log('Existe componente Ferramenta');
    } else {
        console.error('Campo Ferramenta não encontrado');
    }
}
);

test('Verificar campo Ambientes', async ({ page }) => {
    await page.goto(homePage);
    const ambienteVisivel = await page.getByRole('link', { name: homePageComponents.ambienteComponent.componentamb }).isVisible();
    if (ambienteVisivel === true) {
        console.log('Existe componente Ambiente');
    } else {
        console.error('Campo Ambiente não encontrado');
    }
}
);

test('Verificar campo Dicas úteis', async ({ page }) => {
    await page.goto(homePage);
    const dicaVisivel = await page.getByRole('link', { name: homePageComponents.dicasUteisComponent.componentdica }).isVisible();
    if (dicaVisivel === true) {
        console.log('Existe componente Dicas úteis');
    } else {
        console.error('Campo Dicas úteis não encontrado');
    }
}
);