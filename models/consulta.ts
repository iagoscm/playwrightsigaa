import { test, expect, type Locator, type Page  } from '@playwright/test';

export class Sigaa {
    readonly page: Page;
    readonly unidade: Locator;
    readonly buscarBotao: Locator;
    readonly turma: string;
    readonly totalVagasTEP: Locator;
    readonly vagasTEP: Locator;
    readonly vagasQS: Locator;
    readonly vagasGCES: Locator;
    readonly vagasCOMP: Locator;
    readonly vagasESWE: Locator;
    readonly botaoCiente: Locator;


constructor(page: Page) {
    this.page = page;
    this.unidade = page.locator('//*[@id="formTurma:inputDepto"]');
    this.buscarBotao = page.getByRole('button', { name: 'Buscar' });
    this.turma = 'TEP';
    this.totalVagasTEP = page.locator('//*[@id="turmasAbertas"]/table/tbody/tr[41]/td[6]');
    this.vagasTEP = page.locator('//*[@id="turmasAbertas"]/table/tbody/tr[41]/td[7]');
    this.vagasQS = page.locator('//*[@id="turmasAbertas"]/table/tbody/tr[382]/td[7]');
    this.vagasGCES = page.locator('//*[@id="turmasAbertas"]/table/tbody/tr[346]/td[7]');
    this.vagasCOMP = page.locator('//*[@id="turmasAbertas"]/table/tbody/tr[2]/td[7]');
    this.vagasESWE = page.locator('//*[@id="turmasAbertas"]/table/tbody/tr[379]/td[7]');
    this.botaoCiente = page.locator('//*[@id="sigaa-cookie-consent"]/button');
}


async navigate(){
    await this.page.goto('https://sigaa.unb.br/sigaa/public/turmas/listar.jsf');
}

}
