/// ==========================================
// CONTROLE DO MODAL DE RESUMO VISUAL
// ==========================================
let btnAjuda = document.querySelector(".banner .botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");

btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);

function abreModal() {
  modal.style.display = "block";
}

function fechaModal() {
  modal.style.display = "none";
}

// ==========================================
// CONTROLE DO TAMANHO DAS FONTES
// ==========================================
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;

let btnAumentaFonte = document.getElementById("btnAumentaTexto");
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto");

btnAumentaFonte.addEventListener("click", aumentaFonte);
btnDiminuiFonte.addEventListener("click", diminuiFonte);

function aumentaFonte() {
  tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
  document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

function diminuiFonte() {
  tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido;
  document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

// ==========================================
// LEITURA DE TELA (VOZ ALTA)
// ==========================================
let lendo = false;
const btnLeitura = document.getElementById("btnVoz");

btnLeitura.addEventListener("click", lerEmVozAlta);

function lerEmVozAlta() {
  if (lendo === true) {
    if (speechSynthesis.paused === true) {
      speechSynthesis.resume();
    } else {
      speechSynthesis.pause();
    }
    return;
  }

  let conteudo = document.querySelector("main");
  let texto = conteudo.innerText;

  let fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  fala.onend = finalizarLeitura;

  speechSynthesis.cancel();
  speechSynthesis.speak(fala);

  lendo = true;
}

function finalizarLeitura() {
  lendo = false;
}

// ==========================================
// ADICIONAR NOVO PROJETO DINAMICAMENTE
// ==========================================
let btnSalvarProjeto = document.getElementById("btnSalvarProjeto");

if (btnSalvarProjeto) {
  btnSalvarProjeto.addEventListener("click", function () {
    let titulo = document.getElementById("tituloProjeto").value;
    let categoria = document.getElementById("categoriaProjeto").value;
    let descricao = document.getElementById("descricaoProjeto").value;

    if (!titulo || !descricao) {
      alert("Por favor, preencha o nome e a explicação do seu projeto!");
      return;
    }

    let gradeProjetos = document.querySelector(".grade-projetos");

    let novoCartao = document.createElement("article");
    novoCartao.className = "cartao-projeto";
    novoCartao.innerHTML = `
      <span class="tag-categoria">${categoria}</span>
      <h3>${titulo}</h3>
      <p><strong>Descrição:</strong> ${descricao}</p>
    `;

    gradeProjetos.appendChild(novoCartao);

    // Limpar campos
    document.getElementById("tituloProjeto").value = "";
    document.getElementById("descricaoProjeto").value = "";

    alert("Seu projeto foi adicionado com sucesso!");
  });
}