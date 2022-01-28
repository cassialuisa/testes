

function calcula(num) {
    if (num < 2) {
        return num
    }
    else {
        return calcula(num - 1) + calcula(num -2)
    }
}

console.log(calcula(9))



function teste() {
    let a = 2
    let b = 4
    let c = 8
    let d = b * b - 4 * a * c
    console.log(d)
}

// teste()

function question01() {
    let a = 4
    let b = 1
    let c = a
    while (c > 0) {
        b = b * c
        c = c - 1
    }
    console.log(b)
    return b -a
}
// console.log(question01())

function caminha(x, y, direcao) {
    if (direcao == 1) {
        x = x -1
    }
    else if (direcao == 2) {
        x = x + 1
    }
    else if (direcao == 3) {
        y = y + 1
    }
    else {

        y = y -1
    }
    return [x, y]
}

const x = 3
const y = 3

let a = caminha(x, y, 2)
let b = caminha(a[0], a[1], 4)
let c = caminha(b[0], b[1], 1)
let d = caminha(c[0], c[1], 3)
let e = caminha (d[0], d[1], 3)
let f = caminha (e[0], e[1], 3)
let g = caminha (f[0], f[1], 2)
let h = caminha (g[0], g[1], 3)
let i = caminha (h[0], h[1], 2)
let j = caminha (i[0], i[1], 3)
// console.log(j)  

function busca(e, d, x, list) {
    console.log('chamou')
    let pivo
    if (e <= d) {
        pivo = (e + d ) / 2
        if (x == list[pivo]) {
            return pivo
        }
        else if (x < list[pivo]) {
            return busca(e, pivo -1, x, list)
        }
        else {
            return busca(pivo +1, d, x, list)
        }
    }
    return -1
}
const list = [0, 1, 3, 6, 8, 10, 12, 15, 20, 26, 30, 44, 66, 80]
const alvo = 10
let esquerda = 0


const direita = list.length - 1
busca(esquerda, direita, alvo, list)
