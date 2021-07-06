const fistText = document.querySelector('.first__name .text__name')

const onMouseMove = ({ clientX }) => {
    const x = clientX - innerWidth / 6
    gsap.to('.first__name .text__name, .second__name .text__name', 1, {
        x: x
    })
}

window.addEventListener('mousemove', onMouseMove)