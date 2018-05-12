const codebreaker = require('./codebreaker');
var assert = require('chai').assert;

let instanceCodeBreaker = new codebreaker("1234");

describe('CODEBREAKER', function(){
    it('todos iguales' , function (){
        let res = instanceCodeBreaker.compare("1234");
        assert.equal(res, "xxxx"); 
    });

    it('todos distintos' , function (){
        let res = instanceCodeBreaker.compare("5678");
        assert.equal(res, ""); 
    });

    it('todos en desorden' , function (){
        let res = instanceCodeBreaker.compare("2143");
        assert.equal(res, "____"); 
    });

    it('dos iguales, dos en desorden' , function (){
        let res = instanceCodeBreaker.compare("1243");
        assert.equal(res, "xx__"); 
    });

    it('uno igual, tres en desorden' , function (){
        let res = instanceCodeBreaker.compare("2314");
        assert.equal(res, "x___"); 
    });

    it('tamaño menor' , function (){
        let res = instanceCodeBreaker.compare("231");
        assert.equal(res, "ingrese un numero de cuatro digitos"); 
    });
    it('tamaño mayor' , function (){
        let res = instanceCodeBreaker.compare("23145");
        assert.equal(res, "ingrese un numero de cuatro digitos"); 
    });

    it('algun caracter no numerico' , function (){
        let res = instanceCodeBreaker.compare("2a14");
        assert.equal(res, "algun caracter no es un numero"); 
    });
    
});