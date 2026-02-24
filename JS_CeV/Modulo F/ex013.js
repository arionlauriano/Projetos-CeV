let num = [5, 4, 3, 2, 1]
num[5] = 0
num.push(-1)
let lg = num.length
num.sort()
console.log(`Nosso valor é ${num} e tem ${lg} elementos`)