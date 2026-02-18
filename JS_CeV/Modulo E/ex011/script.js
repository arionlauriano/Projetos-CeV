function contar() {
    let start = document.getElementById('start')
    let end = document.getElementById('end')
    let pace = document.getElementById('pace')
    let res = document.getElementById('result')
    if (start.value.length == 0 || end.value.length == 0 || end.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        let st = Number(start.value)
        let en = Number(end.value)
        let pc = Number(pace.value)
        if (pc <= 0) {
            window.alert('Impossível contar com passo 0.')
        } else {
            if (st < en) {
                for(let c = st; c <= en; c += pc) {
                    res.innerHTML += `👉 ${c} `
                }
            } else {
                for(let c = st; c >= en; c -= pc) {
                    res.innerHTML += `👉 ${c} `
                }
            }
        }
    }
}