let listCores = document.querySelectorAll('#list-cores li')
let textList = []
let coresValidas = []

listCores.forEach(element => {
    textList.push(element.textContent)
});

const BUSCA_FRASE = () => {
    let frase = document.querySelector('#texto-cores')
    let corRetornada = FILTRA_ITEMS(frase.value)

    while(corRetornada.length > 0) {
        let cor = corRetornada.pop()
        
        if (cor.indexOf(frase.value) == 0) {
            coresValidas.push(cor)
        }
    }
    
    RESETA_ORDER()
}

const RESETA_ORDER = () => {
    listCores.forEach(element => {
        element.style.order = 1
    });

    while (coresValidas.length > 0) {
        let cor = coresValidas.pop()

        let nDaList = textList.indexOf(cor.toString())
        listCores[nDaList].style.order = 0
    }
}

const FILTRA_ITEMS = (query) => {
    return textList.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
}