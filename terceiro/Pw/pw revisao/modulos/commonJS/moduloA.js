exports.bemvindo = "oi";

function somar(a,b){
    return a + b;
}
module.exports.somar = somar;

module.exports.multiplicar = (a,b) => a*b;

const dividir = (a, b) => a / b;

module.exports.dividir = dividir;
