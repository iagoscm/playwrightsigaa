import { test, expect, type Locator, type Page  } from '@playwright/test';
import { Sigaa } from '../models/consulta';

test.beforeEach(async ({ page }) => {
    const sigaa = new Sigaa(page);
    await sigaa.navigate();
    await sigaa.botaoCiente.click();
});

test.describe('Sigaa', () => {

    // Não ocorre nenhum tipo de ação no site, apenas é feito um print da tela e comparado com o print anterior
    // Caso alerte um erro, pode ser timeout (o qual pode ser configurado no config do playwright), ou pode ser porque há vaga
    // No momento, só ocorre um erro, e não é dito qual é o erro, então não é possível saber se é timeout ou se há vaga
    // Para saber se há vaga, é necessário olhar o erro, se for de print, significa que há vaga
    // Para que seja útil, é interessante que seja mandado um alerta via email ou algo do tipo
    // Para isso, é necessário que o teste seja feito em um servidor, e não localmente
    test('vendo se tem vaga em TEP; QS; GCES; COMP', async ({ page }) => {
        const sigaa = new Sigaa(page);
        while(true){
            await sigaa.navigate();
            await sigaa.unidade.selectOption({ label: 'FACULDADE DO GAMA - BRASÍLIA' });
            await sigaa.buscarBotao.click();
            expect(await sigaa.vagasTEP.screenshot({ path: 'TEP.png' })).toMatchSnapshot('TEP.png', { threshold: 0.38 });
            expect(await sigaa.vagasQS.screenshot({ path: 'QS.png' })).toMatchSnapshot('QS.png', { threshold: 0.38});
            expect(await sigaa.vagasGCES.screenshot({ path: 'GCES.png' })).toMatchSnapshot('GCES.png', { threshold: 0.38 });
            expect(await sigaa.vagasCOMP.screenshot({ path: 'COMP.png' })).toMatchSnapshot('COMP.png', { threshold: 0.38 });
            expect(await sigaa.vagasESWE.screenshot({ path: 'ESWE.png' })).toMatchSnapshot('ESWE.png', { threshold: 0.38 });
        }
    });
    /*test('vendo se tem vaga em QS', async ({ page }) => {
        const sigaa = new Sigaa(page);
        while(true){
            await sigaa.navigate();
            await sigaa.unidade.selectOption({ label: 'FACULDADE DO GAMA - BRASÍLIA' });
            await sigaa.buscarBotao.click();
            expect(await sigaa.vagasQS.screenshot({ path: 'QS.png' })).toMatchSnapshot('QS.png', { threshold: 0.8 });
        }
    });
    test('vendo se tem vaga em GCES', async ({ page }) => {
        const sigaa = new Sigaa(page);
        while(true){
            await sigaa.navigate();
            await sigaa.unidade.selectOption({ label: 'FACULDADE DO GAMA - BRASÍLIA' });
            await sigaa.buscarBotao.click();
            expect(await sigaa.vagasGCES.screenshot({ path: 'GCES.png' })).toMatchSnapshot('GCES.png', { threshold: 0.8 });
        }
    });
    test('vendo se tem vaga em COMP', async ({ page }) => {
        const sigaa = new Sigaa(page);
        while(true){
            await sigaa.navigate();
            await sigaa.unidade.selectOption({ label: 'FACULDADE DO GAMA - BRASÍLIA' });
            await sigaa.buscarBotao.click();
            expect(await sigaa.vagasCOMP.screenshot({ path: 'COMP.png' })).toMatchSnapshot('COMP.png', { threshold: 0.8 });
        }
    });*/
});
