let listItems = document.querySelectorAll('#list-cores li')
let todasUl = document.querySelectorAll('ul')
let textList = []
let optionsValidas = []

const filtraOption = () =>  {
    let select = document.getElementById('select-opcoes')
    let option = select.options[select.selectedIndex]
    mostraOption(option.value)
}

const mostraOption = (option)=> {
    todasUl.forEach(ul => {
        if(ul.className != `list-${option} list-global`) {
            ul.style.display = 'none'
        } else {
            ul.style.display = 'flex'
        }
    });
}

filtraOption()

listItems.forEach(element => {
    textList.push(element.textContent)
});

const BUSCA_FRASE = () => {
    let frase = document.querySelector('#texto-cores')
    let optionRetornada = FILTRA_ITEMS(frase.value)
    while(optionRetornada.length > 0) {
        let option = optionRetornada.pop()
        option.toLowerCase(optionsValidas.push(option))
    }
    
    RESETA_ORDER()
}

const RESETA_ORDER = () => {
    listItems.forEach(element => {
        element.style.order = 1
    });

    while (optionsValidas.length > 0) {
        let item = optionsValidas.pop()
        let nDaList = textList.indexOf(item.toString())

        listItems[nDaList].style.order = 0
    }
}

const FILTRA_ITEMS = (query) => {
    return textList.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
}