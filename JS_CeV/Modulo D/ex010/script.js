function roda() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imgs')
    var data = new Date()
    var hr = data.getHours()
    hr = 18
    msg.innerHTML = `Atualmente são ${hr} horas.`
    if (hr >= 0 && hr <12) {
        // Dia
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#a2571a'

    } else if (hr >= 12 && hr <18) {
        // Tarde
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#f4bf39ff'
    } else {
        // Noite
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#033061ff'
    }
}