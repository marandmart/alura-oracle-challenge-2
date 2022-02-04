let letrasTentadas = [];

let partesDoCorpo = ['cabeça', 'corpo', 'braços', 'pernas', 'olhos', 'nariz', 'boca'];

let quantidadeDeTentativas = partesDoCorpo.length;

let espacosAPreencher;

let palavra;

document.addEventListener('DOMContentLoaded', () => {

    Desenhar('forca');

    carregarPalavras().then(main, handleError);

})

const main = (result) => {
    let db = [...result];

    palavra = db[Math.floor(Math.random() * db.length)].palavras.split("");

    espacosAPreencher = palavra.length;

    adicionarEspacoDaPalavra(palavra);
    adicionaEventListeners();
}

const handleError = (erro) => {
    alert('Houve algum erro');
    console.log(erro);
}

const adicionarEspacoDaPalavra = (palavra) => {
    let tamanhoPalavra = palavra.length;
    let localDeInsercao = document.getElementById('palavra');

    for (let i = 0; i < tamanhoPalavra; i++) {
        let item = document.createElement('span');
        item.innerText = "__";
        item.className = "letra-da-palavra";
        item.setAttribute('id', `letra-${i}`);
        localDeInsercao.appendChild(item);
    }
}

const adicionaEventListeners = () => {
    let areaDoTeclado = document.getElementById('teclado');

    document.addEventListener('keypress', ProcessaTeclado);
    areaDoTeclado.addEventListener('click', ProcessaTecladoVirtual);
}

const ProcessaTeclado = (event) => {
    if (/[a-z]/.test(event.key)) {
        checaTentativa(event.key);
    }
}

const ProcessaTecladoVirtual = (event) => {
    if (/[a-z]/.test(event.target.value) && event.target.value != undefined) {
        checaTentativa(event.target.value);
    }
}

const checaTentativa = (tecla) => {
    let letra = tecla.toUpperCase();
    // checa se a letra está na lista de letras tentadas
    if (letrasTentadas.indexOf(letra) === -1) {
        if (palavra.includes(letra)) {
            // checa cada letra da palavra da forca
            palavra.map((char, index) => {
                if (char === letra) {
                    let item = document.getElementById('letra-' + index);
                    item.innerText = letra;
                    espacosAPreencher -= 1;
                    letrasTentadas.push(letra);
                }
                // serve para poder escrever a ultima letra e então mostra o alert
                setInterval(() => {
                    if (espacosAPreencher === 0) {
                        alert('Você ganhou!');

                        // faz com que se pare de mostrar o alert
                        espacosAPreencher -= 1;

                        limpaEventListeners();
                    }
                }, 250)
            })
        } else {
            // adiciona a letra a lista de letras tentadas
            let letrasErradas = document.getElementById('letras-erradas');
            let item = document.createElement('span');
            item.textContent = letra;
            item.className = "letra-da-palavra";
            letrasErradas.appendChild(item);
            letrasTentadas.push(letra);

            // faz o desenho na forca
            let parteDoCorpo = partesDoCorpo.shift();
            Desenhar(parteDoCorpo);
            quantidadeDeTentativas -= 1;
            setInterval(() => {
                if (quantidadeDeTentativas === 0) {
                    alert("Você perdeu");

                    quantidadeDeTentativas -= 1;

                    limpaEventListeners();
                }
            })
        }
    } else {
        alert('Letra já foi tentada');
    }
}

const limpaEventListeners = () => {
    let areaDoTeclado = document.getElementById('teclado');
    areaDoTeclado.removeEventListener('click', ProcessaTecladoVirtual);
    document.removeEventListener('keypress', ProcessaTeclado);
}