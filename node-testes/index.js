const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;
const calculosDescontos = (salario, descontos) => salario - descontos;

export {
  somaHorasExtras,
  calculosDescontos,
};

/* const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgual(esperado) {
      if (valor !== esperado) {
        // eslint-disable-next-line no-throw-literal
        throw {};
      }
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`Teste ${titulo} passou!`);
  } catch (error) {
    console.error(`Teste ${titulo} não passou!`);
  }
};

teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgual(esperado);
});

teste('calculosDesconto', () => {
  const esperado = 2300;
  const retornado = calculosDescontos(2500, 200);

  verifiqueSe(retornado).ehExatamenteIgual(esperado);
}); */
