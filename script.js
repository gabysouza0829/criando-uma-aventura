const avance = document.querySelectorall('.btn-proximo');

avanca.array.forEach(button =>{
  button.addEventlistener('click',function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    atual.classList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
  })
})