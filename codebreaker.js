
class CodeBreaker {
  constructor(secret) {
    this.secret = secret;
  }

  compare(number){
    let size = number.length
    let result = ""
    let equalDigits = 0;
    let containDigits = 0;
    var reg = new RegExp('^[0-9]*$');
   
    if(!(this.secret.length == size)){
        return "ingrese un numero de cuatro digitos";
    }

    if(!reg.test(number)) {
        return "algun caracter no es un numero";
    }

    for(let i = 0; i < size; i++){
        if (this.secret.includes(number[i])) {
            if (this.secret[i]===number[i]) {
                equalDigits++;
            } else {
                containDigits++;
            }
        }
        else {
            //result += "";
        }            
    }
    //result = Array(equalDigits+1).join("x") + Array(containDigits+1).join("_");
    result = "x".repeat(equalDigits) + "_".repeat(containDigits);
    return result;
  }
}

module.exports = CodeBreaker;
//export default class {}