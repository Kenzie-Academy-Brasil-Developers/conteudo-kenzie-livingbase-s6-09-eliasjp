function buttonHome (){
    const button = document.querySelector(`.link-home`)

    button.addEventListener(`click`, () => {
        window.location.assign(`../../index.html`, `_self`)   
    })
}

buttonHome ()