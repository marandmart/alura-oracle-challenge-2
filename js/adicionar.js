let palavrasDoBancoDeDados = [];

document.addEventListener('DOMContentLoaded', () => {

    carregarPalavras().then(listarPalavras, handleError);

    let botao = document.getElementById('enviar-palavra');

    botao.addEventListener('click', () => {

        processarPalavra();

    });

    document.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            processarPalavra();
        }
    })

})

const processarPalavra = () => {
    let inputPalavra = document.getElementById('input-palavra');

    let palavra = inputPalavra.value.toUpperCase();

    verificarPalavra(palavra);

    inputPalavra.value = "";
}

const listarPalavras = (result) => {
    let db = [...result];

    db.map((item) => {
        palavrasDoBancoDeDados.push(item.palavras);
    });

    palavrasDoBancoDeDados.sort().map(palavra => {
        adicionarNaListaDaPagina(palavra);
    })

    console.log(palavrasDoBancoDeDados);
}

const handleError = (erro) => {
    alert('Houve algum erro');
    console.log(erro);
}

const adicionarNaListaDaPagina = (palavra) => {
    let li = document.createElement('li');
    li.textContent = palavra;
    let ul = document.getElementById('palavras-do-jogo');

    ul.appendChild(li);
}

const verificarPalavra = (palavra) => {

    if (palavra === "") {
        alert("Não pode enviar campo vazio");
        return;
    }

    if (palavra.length === 1) {
        alert("Precisa conter no mínimo 2 caracteres");
        return;
    }

    if (palavrasDoBancoDeDados.includes(palavra)) {
        alert('Palavra já existe no banco de dados');
        return;
    }

    if (/[0-9]/.test(palavra)) {
        alert('Não podem haver números na palavra');
        return;
    }

    if ((/\u00c7/.test(palavra))) {
        alert("Não pode haver 'Ç' na palavra");
        return;
    }

    if (/\W|_/.test(palavra)) {
        alert("Não podem haver caracteres especiais");
        return;
    }

    enviarPalavraAoServidor(palavra);

}

const enviarPalavraAoServidor = (palavra) => {
    // um ultimo teste para confirma que só estão sendo usadas palavras de A-Z
    let testeRedundante = [];

    palavra.split("").map(charactere => {
        testeRedundante.push(/[A-Z]/.test(charactere));
    })

    if (testeRedundante.every(elem => elem === true)) {
        inserirPalavras(palavra);
    } else {
        alert('Palavra incompatível com especificações');
    }

}