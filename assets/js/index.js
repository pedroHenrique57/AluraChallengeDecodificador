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
