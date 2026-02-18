function tabuada() {
    let val = document.getElementById('val')
    let fmult = document.getElementById('fmult')
    let lmult = document.getElementById('lmult')
    let tab = document.getElementById('tabuada')
    if (val.value.length == 0 || fmult.value.length == 0 || lmult.value.length == 0) {
        window.alert('Por favor, preencha todos os dados.')
    } else {
        let v = Number(val.value)
        let fm = Number(fmult.value)
        let lm = Number(lmult.value)

        tab.innerHTML = ''

        if (fm <= lm) {
            for(let c = fm; c <= lm; c += 1) {
                let item = document.createElement('option')
                item.text = `${v} x ${c} = ${v*c}`
                item.value = `tab${c}`
                tab.appendChild(item)
            }
        } else {
            for(let c = fm; c >= lm; c -= 1) {
                let item = document.createElement('option')
                item.text = `${v} x ${c} = ${v*c}`
                item.value = `tab${c}`
                tab.appendChild(item)
            }
        }
    }
}