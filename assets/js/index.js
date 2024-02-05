function botaoCriptografar() {
  let texto = document.getElementById('caixaDeTexto').value;
  let deslocamento = 13;
  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
    let caractere = texto[i];

    if (/[a-z]/.test(caractere)) {
      let codigoASCII = caractere.charCodeAt(0);

      codigo = ((codigoASCII - 97 + deslocamento) % 26) + 97;

      resultado += String.fromCharCode(codigo);
    } else {
      resultado += ' ';
    }
  }
  saidaTextoHTML(resultado);
}

function botaoDescriptografar() {
  let texto = document.getElementById('caixaDeTexto').value;
  let deslocamento = 13;
  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
    let caractere = texto[i];

    if (/[a-z]/.test(caractere)) {
      let codigoASCII = caractere.charCodeAt(0);

      codigo = ((codigoASCII - 97 - deslocamento + 26) % 26) + 97;

      resultado += String.fromCharCode(codigo);
    } else {
      resultado += ' ';
    }
  }
  saidaTextoHTML(resultado);
}

function saidaTextoHTML(resultado) {
  const saidaTexto = document.getElementById('saidaTexto');

  const fraseCriptografadaHtml = `
  <span id="resultadoCripto_Descripto">${resultado}</span>
  <input id="botaoCopiar" onclick="botaoCopiar()" type="button" value="Copiar">`;

  saidaTexto.innerHTML = fraseCriptografadaHtml;
}

function botaoCopiar() {
  const saidaTexto = document.getElementById('resultadoCripto_Descripto').innerText;

  navigator.clipboard.writeText(saidaTexto);
}

// Remove o placeholder do input de texto quando ele está com o foco
document.addEventListener('DOMContentLoaded', function () {
  var caixaDeTexto = document.getElementById('caixaDeTexto');

  var placeHolderOriginal = caixaDeTexto.getAttribute('placeholder');

  caixaDeTexto.addEventListener('focus', function () {
    caixaDeTexto.setAttribute('placeholder', '');
  });

  caixaDeTexto.addEventListener('blur', function () {
    if (caixaDeTexto.value === '') {
      caixaDeTexto.setAttribute('placeholder', placeHolderOriginal);
    }
  });
});

// Remove a imagem do saidaTexto se o media query fica to tamanho mobile (992px para menor)
//Ainda não entendi a logica do da linha 80 E 99 (parece estar invertido) MAS DEU CERTO ENTAO VAMOS
function removeImagem() {
  const saidaTexto = document.getElementById('saidaTexto');
  if (mediaQuery.matches) {
    const saidaTextoSemImagem = `
    <div class="semTextoInformativo">
    <h2>Nenhuma mensagem encontrada</h2>
    <span>Digite um texto que voce deseja Criptografar ou Descriptografar</span>
  </div>`;

    saidaTexto.innerHTML = saidaTextoSemImagem;
  } else {
    const saidaTextoSemImagem = `
    <img src="./assets/img/MulherComLupa.svg" alt="Imagem de uma mulher observando um diamante com uma lupa." />
    <div class="semTextoInformativo">
      <h2>Nenhuma mensagem encontrada</h2>
      <span>Digite um texto que voce deseja Criptografar ou Descriptografar</span>
    </div>`;

    saidaTexto.innerHTML = saidaTextoSemImagem;
  }
}
const mediaQuery = window.matchMedia('(max-width: 992px)');

mediaQuery.addEventListener('change', (e) => removeImagem(e.media));

removeImagem(mediaQuery);
