function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>O campo de pesquisa está vazio, <strong>digite o nome de um Atleta!</strong></p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let atleta = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
  for (let dado of dados) {
    atleta = dado.atleta.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se atleta includes campoPesquisa
    if (atleta.includes(campoPesquisa) || tags.includes(campoPesquisa)){
    //if (atleta.includes(campoPesquisa) || descricao.includes(campoPesquisa))
    // cria um novo elemento
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
   
  }

  if (!resultados) {
    resultados = "<p><strong>Nada</strong> foi encontrado</p>";
  }

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}
