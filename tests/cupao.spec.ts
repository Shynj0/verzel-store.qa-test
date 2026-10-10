import { test, expect } from '@playwright/test';

test.describe('Verzel Store - Validação de Cupons', () => {

  test('Deve aplicar cupão de primeira compra com sucesso (CA01)', async ({ page }) => {
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');
    await page.getByText('Adicionar ao carrinho').first().click();
    await page.locator('.link-carrinho').click();
    
    await page.locator('#campo-cupom').fill('BEMVINDO10');
    await page.getByText('Aplicar cupom').click();
    
    await expect(page.locator('[data-valor="total"]')).toHaveText('R$ 73,81');
  });

  test('Deve exibir erro ao aplicar cupão inválido (CA03)', async ({ page }) => {
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');
    await page.getByText('Adicionar ao carrinho').first().click();
    await page.locator('.link-carrinho').click();
    
    await page.locator('#campo-cupom').fill('FALSO10');
    await page.getByText('Aplicar cupom').click();
    
    await expect(page.getByText('Cupom inválido.')).toBeVisible();
    await expect(page.locator('[data-valor="total"]')).toHaveText('R$ 79,80');
  });

  test('Deve exibir erro ao aplicar cupão expirado (CA04)', async ({ page }) => {
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');
    await page.getByText('Adicionar ao carrinho').first().click();
    await page.locator('.link-carrinho').click();
    
    await page.locator('#campo-cupom').fill('VERAO2026');
    await page.getByText('Aplicar cupom').click();
    
    await expect(page.getByText('Cupom expirado.')).toBeVisible();
    await expect(page.locator('[data-valor="total"]')).toHaveText('R$ 79,80');
  });

});