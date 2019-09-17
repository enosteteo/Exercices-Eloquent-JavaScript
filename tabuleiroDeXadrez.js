let preto = '#';
let branco = ' ';
let tab = '';
let tamanho = 8;

for(let numberLin = 0; numberLin < tamanho; numberLin++){
    for(let numberCol = 0; numberCol < (tamanho/2); numberCol++){
        if (numberLin%2 === 0){
            tab += preto;
            tab += branco;
        }
        else{
            tab += branco;
            tab += preto;
        }
    } 
    tab += '\n';
}    
console.log(tab);