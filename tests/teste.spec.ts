import { test, expect, type Locator, type Page  } from '@playwright/test';

test.describe('Teste', () => {
    test('teste', async ({ page }) => {
        await page.goto('https://dontpad.com/sim');
        await page.waitForTimeout(3000);
        while(true){
            expect(await page.screenshot( {path: 'a.png' })).toMatchSnapshot('a.png', { threshold: 0.8 });
        }
    });
});

//https://dontpad.com/sim
