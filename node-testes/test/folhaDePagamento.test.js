import { somaHorasExtras, calculosDescontos } from '../index';

describe('Testes dos calculos de folha de pagamento', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(esperado).toBe(retornado);
  });

  it('Deve retornar o valor do salário com os descontos', () => {
    const esperado = 2300;
    const retornado = calculosDescontos(2500, 200);

    expect(esperado).toBe(retornado);
  });
});