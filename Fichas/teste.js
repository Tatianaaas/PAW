function multiplicacao(num1, num2){
    return num1*num2
}
function maiorString(array){
    var maiorStr="teste"
    for(var i=0; i<array.length-1;i++){
        if(array[i].length > array[i+1].length){
            maiorStr=array[i]
        }
     }
return maiorStr
}

function primeiraLetra(strM){
    var caracter=0
    caracter=strM.charCodeAt(0)
    if(caracter>64 && caracter<91){
        return strM
    }else{
       strM= strM.replace(strM[0],strM[0].toUpperCase() );
        return strM
    }

}

function ocorrencias(numerosArr){

    var contador, ocorre, posicao, maior
    contador=0
    ocorre=-1
    posicao=-1
    maior=-1
    for (var i=0; i<numerosArr.length;i++){
        contador=0
        ocorre=numerosArr[i]
        for(var j=1; j<numerosArr.length-1;j++){
            if(ocorre==numerosArr[j]){
                contador++
            }
        }
        if(contador>0){
            if(maior<contador){
                maior=contador
                posicao=i
            }
        }
    }
    return numerosArr[posicao]        

}

function validacaoEmail(field) {
    usuario = field.slice(0, field.indexOf("@"));
    dominio = field.slice(field.indexOf("@")+ 1, field.length);
     console.log(field)
    if ((field.indexOf("@")>-1) &&(usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) &&(usuario.search(" ")==-1) && 
     (dominio.search(" ")==-1) && (dominio.search(".")!=-1) && (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return "Email Valido"
    }
    else{
            return "Email Invalido"
    }
}

function noveDigitos(valor){
var numeros= valor.toString()
var digitos=[]
var resultado=""
var numFalta
    if(valor<100000000){
        numFalta=9-numeros.length
       for(var i=0;i<numFalta;i++){
        digitos[i]="0"
    }
    digitos.push(numeros)
    resultado=digitos.toString()
    resultado.split(",");
    console.log(resultado)
    }else if(valor>999999999){
         throw "Numero com mais de 9 digitos"
    }

}



/* EXERCICIO 1.3.2 FUNCOES
var numero1 , numero2;
numero1= 20
numero2=10
console.log(multiplicacao(numero1,numero2))

var arr=["tatiana","ola","hello"]
console.log(maiorString(arr))

var nome= "Tofia"
console.log(primeiraLetra(nome))

var numeros=[1,3,5,6,1,6,6,7,8,9,0]
console.log(ocorrencias(numeros))

var mail="tatiana@hotmail.com"
console.log(validacaoEmail(mail))

var digitos= 1348383
noveDigitos(digitos)
*/


