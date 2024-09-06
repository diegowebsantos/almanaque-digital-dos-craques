function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Loga o elemento HTML no console para verificação

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
  for (let dado of dados) {
    // Constrói o HTML para cada item do resultado da pesquisa, formatando os dados
    resultados += `
    <div class="container item-resultado">
      <h2>
        <a href="#!">${dado.atleta}</a>
      </h2>
      <div class="box"><img src="${dado.foto}" alt="Jogador ${dado.atleta}"></div>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link}" target="_blank">Mais informações</a>
    </div>
    `;
  }

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}