function backToTop (){
    const button = document.querySelector(`.go-top`)

    button.addEventListener(`click`, () => {
        window.scrollTo(0, 0)
    })
}

backToTop ()