import { describe, expect, it, jest, test } from '@jest/globals';
import Editora from '../../models/editora';

describe('Testando o modelo Editora', () => {
  const objetoEditora = {
    nome: 'MNA',
    cidade: 'Uberlândia',
    email: 'm@n.com',
  };

  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objetoEditora);
    expect(editora).toEqual(expect.objectContaining(objetoEditora));
  });

  it.skip('Deve salvar editora no BD', () => {
    const editora = new Editora(objetoEditora);
    editora.salvar().then((dados) => {
      expect(dados.nome).toBe('MNA');
    });
  });

  it.skip('Deve salvar no BD usando a sintaxe moderna', async () => {
    const editora = new Editora(objetoEditora);
    const dados = await editora.salvar();
    const retornado = await Editora.pegarPeloId(dados.id);
    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  test('Deve fazer uma chamada simulada ao BD', () => {
    const editora = new Editora(objetoEditora);
    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'MNA',
      cidade: 'Uberlândia',
      email: 'm@n.com',
      created_at: '2026-03-31',
      updated_at: '2026-03-31',
    });

    const retorno = editora.salvar();

    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
