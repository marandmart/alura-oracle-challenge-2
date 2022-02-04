document.addEventListener('DOMContentLoaded', () => {


    let btnEnviar = document.getElementById('btnEnviar');
    let lista = document.getElementById('lista_de_palavras');

    btnEnviar.addEventListener('click', () => {
        let adicionarPalavra = document.getElementById('adicionarPalavra');

        listaDePalavras.push(adicionarPalavra.value);

        let item = document.createElement('li');
        item.textContent = adicionarPalavra.value;
        lista.appendChild(item);

        adicionarPalavra.value = "";
    })
})