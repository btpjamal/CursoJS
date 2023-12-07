function fatorial(n){
    let fat= 1
    for(let c= n; c > 1; c--){
        fat= fat * c
    }
    return fat
}
//ex: 5 * 4 * 3 * 2 * 1 = 120

console.log(fatorial(5))