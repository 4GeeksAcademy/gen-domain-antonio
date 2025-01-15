let pronouns = ['the','our', 'my', 'your'];
let adjs = ['great', 'big', 'small', 'fast'];
let nouns = ['lion', 'car', 'house', 'dog'];
let exts = ['.com', '.net', '.org', '.io'];
let domainList = document.getElementById('domainList'); 

function generateName(pronouns, adjs, nouns, exts) {
    let dominios = [];
    
    for(let pronoun of pronouns){
        for(let adj of adjs){
            for(let noun of nouns){
                for(let ext of exts){
                    let dominio = `${pronoun}${adj}${noun}${ext}`;
                    dominios.push(dominio);
                }
            }
        }
    }
    return dominios;
}

function showArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
        let li = document.createElement('li');
        li.textContent = array[i];
        domainList.appendChild(li);
    }
}

let resultado = generateName(pronouns, adjs, nouns, exts);
showArray(resultado);