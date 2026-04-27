function adicionarNoFinal(lista, elemento){
    
    let nova_lista = [];

    //Lógica para atualizar nova lista
    for (let i = 0; i < lista.length; i++) {
        nova_lista[i] = lista[i];

    }

    nova_lista[lista.length] = elemento;
    return nova_lista;
}
// elemento = ian
//lista = tom, bob e dan
//lista = tom, bob e dan, ian

function removerDoFinal(lista){
    let nova_lista = [];

    // Pegar a lista que veio menos o ultimo
    for (let i = 0; i < lista.length - 1; i++) {
        nova_lista[i] = lista[i];
    }

    return nova_lista;
}

function removerDoInicio(lista){
    let nova_lista = [];

    // Pegar a lista que veio menos o primeiro
    for (let i = 1; i < lista.length; i++) {
        nova_lista[i] = lista[i];
    }

    return nova_lista;

}

function adicionarNoInicio(lista, elemento){
    let nova_lista = [];

    nova_lista[0] = elemento;

    let j = 0;

    // Pegar a lista e ir adicionando depois do zero
    for (let i = 1; i < lista.length; i++) {
        nova_lista[i] = lista[j];
        j++;
    }

    return nova_lista;
}

function alterarLista(lista, indice, quantidade, elemento) {
    let nova_lista = [];
    let listap1 = [];
    let listap2 = [];

    // Pegar o vetor original e divide em 2. menos o intervalo entre o indice inicial + limite(definido pela quantidade)
    for (let i = 0; i < indice + quantidade - 1; i++) {
        listap1[i] = lista[i];
        
    }
    console.log("Lista P1", listap1);

    // Se tiver um elemento adicional, insere no indice de remoção


    return nova_lista;

}
