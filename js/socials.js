window.addEventListener('DOMContentLoaded', () => {
    VANTA.BIRDS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color2: 0x4a0000,
        birdSize: 0.50,
        backgroundAlpha: 0.00
    })

        setTimeout(() => {
            const main = document.querySelector('main')
            main.style.opacity = 1
        }, 1000)
})