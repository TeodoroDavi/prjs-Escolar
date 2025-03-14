function gerarLinha(tamanho){
    let linha = '';
    for(let i=0; i<tamanho; i++){
        linha+='-'
    }
    return linha;
}

export default gerarLinha;