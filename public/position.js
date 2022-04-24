function myFunction() {

    var body = document.body
    // console.log(body)

    var refs = document.querySelectorAll(".is-hoverable");

    var screenSize = getScreenSize();

    // console.log(screenSize)
    // console.log(refs)


    refs.forEach(el => {
        el.addEventListener("mouseenter", function (evt) {
            var mousePosY = evt.clientY
            var mousePosX = evt.clientX

            // detectar posicion en el eje Y
            if (mousePosY < (screenSize.height / 2)) {
                // estas en la parte superior de la mitad de la pantalla en el eje Y
                // console.log(`estas en la parte SUPERIOR. HEIGHT:${screenSize.height} MOUSE_POS_Y:${mousePosY}`)
                el.classList.remove('is-up')
                // console.log(el)
            } else {
                // estas en la parte inferior de la mitad de la pantalla en el eje Y
                // console.log(`estas en la parte INFERIOR. HEIGHT:${screenSize.height} MOUSE_POS_Y:${mousePosY}`)
                el.classList.add('is-up')

            }

            // detectar posicion en el eje X
            if (mousePosX > (screenSize.width / 2)) {
                el.classList.add('is-right')
            } else {
                el.classList.remove('is-right')
            }
        })
    })

    function getScreenSize() {
        return {
            width: window.screen.width,
            height: window.screen.height
        }
    }
}

setTimeout(myFunction, 1000)