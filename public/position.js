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
            if (mousePosY < (screenSize.height / 2)) {
                // estas en la parte superior de la mitad de la pantalla en el eje Y
                // console.log(`estas en la parte INFERIOR. HEIGHT:${screenSize.height} MOUSE_POS_Y:${mousePosY}`)
                el.classList.remove('is-up')
                // console.log(el)
            }
            else {
                // estas en la parte inferior de la mitad de la pantalla en el eje Y
                // console.log(`estas en la parte INFERIOR. HEIGHT:${screenSize.height} MOUSE_POS_Y:${mousePosY}`)
                el.classList.add('is-up')

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

setTimeout(myFunction, 3000)