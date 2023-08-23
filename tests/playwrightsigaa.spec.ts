import { test, expect, type Locator, type Page  } from '@playwright/test';
import { Sigaa } from '../models/consulta';

test.beforeEach(async ({ page }) => {
    const sigaa = new Sigaa(page);
    await sigaa.navigate();
    await sigaa.botaoCiente.click();
});

test.describe('Sigaa', () => {
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
