function soma(numero1, numero2) {
    if (numero1 == null || numero1 == undefined) {
        console.log("O primeiro número não pode ser nulo ou indefinido - soma");
        return

    }
    if (numero2 == null || numero2 == undefined) {
        console.log("O segundo número não pode ser nulo ou indefinido - soma");
        return
    }

    if (typeof numero1 != "number") {
        console.log("Tipo inválido para o primeiro número - soma")
        return
    }
    if (typeof numero2 != "number") {
        console.log("Tipo inválido para o segundo número - soma")
        return
    }

    let soma = numero1 + numero2
    return soma

}

function calcularDistancia(x1, y1, x2, y2) {
    if (x1 == null || x1 == undefined) {
        console.log("O x1 não pode ser nulo ou indefinido - distancia");
        return
    }
    if (y1 == null || y1 == undefined) {
        console.log("O x2 não pode ser nulo ou indefinido - distancia");
        return
    }
    if (x2 == null || x2 == undefined) {
        console.log("O x2 não pode ser nulo ou indefinido - distancia");
        return
    }
    if (y2 == null || y2 == undefined) {
        console.log("O y2 não pode ser nulo ou indefinido - distancia");
        return
    }

    if (typeof x1 != "number") {
        console.log("Tipo inválido para o x1 - distancia")
        return
    }
    if (typeof x2 != "number") {
        console.log("Tipo inválido para o x2 - distancia")
        return
    }
    if (typeof y1 != "number") {
        console.log("Tipo inválido para o y1 - distancia")
        return
    }
    if (typeof y2 != "number") {
        console.log("Tipo inválido para o y2 - distancia")
        return
    }

    let distancia = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    return distancia
}

function converterParaHoraMinutoSegundo(segundo) {

    if (segundo == null || segundo == undefined) {
        console.log("Os segundos não pode ser nulo ou indefinido - horas");
        return
    }
    if (typeof segundo != "number") {
        console.log("Tipo inválido para os segundos - horas")
        return
    }

    let horas = Math.floor(segundo / 3600);
    let minutos = Math.floor((segundo % 3600) / 60);
    let segundos = Math.floor(segundo % 60);

    return horas + ":" + minutos + ":" + segundos;
}

function ePrimo(numero) {
    if (numero == null || numero == undefined) {
        console.log("O numero não pode ser nulo ou indefinido - primo");
        return
    }
    if (typeof numero != "number") {
        console.log("Tipo inválido para o numero - primo")
        return
    }

    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    return true;
}

function calcularFatorial (numero){
    if (numero == null || numero == undefined) {
        console.log("O numero não pode ser nulo ou indefinido - fatorial");
        return
    }
    if (typeof numero != "number") {
        console.log("Tipo inválido para o numero - fatorial")
        return
    }
    if (numero % 1 != 0){
        console.log("O número deve ser inteiro - fatorial")
        return
    }

    let resultado;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

function calcularMedia(lista) {
    if (lista == null || lista == undefined) {
        console.log("O numero não pode ser nulo ou indefinido - Media simples");
        return
    }
    if (typeof lista != "number") {
        console.log("Tipo inválido para o numero - Media simples")
        return
    }

    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }

    let media = soma / lista.length;

    return media
}

function calcularMediaPonderada(vetorMedias, vetorPesos){
    if (vetorMedias == null || vetorMedias == undefined) {
        console.log("O vetorMedias não pode ser nulo ou indefinido - Media ponderada");
        return
    }
    if (typeof vetorMedias != "number") {
        console.log("Tipo inválido para o vetorMedias - Media ponderada")
        return
    }

    if (vetorPesos == null || lista == vetorPesos) {
        console.log("O vetorPesos não pode ser nulo ou indefinido - Media ponderada");
        return
    }
    if (typeof vetorPesos != "number") {
        console.log("Tipo inválido para o vetorPesos - Media ponderada")
        return
    }

    let notasPonderadas = [];

    for (let i = 0; i < vetorMedias.length; i++) {
        notasPonderadas.push(vetorMedias[i] * vetorPesos[i]);
    }

    let media = calcularMedia(notasPonderadas);
}
