function main() {

    let tabuada, i, result

    tabuada = Number(prompt('digite o valor que você deseja ver a tabuada'))
    
    i = 0

    while (i < 11){
        result = tabuada * i
        alert(tabuada + ' X '+ i + ' = ' + result)
        i = i + 1
    }
}
    main();