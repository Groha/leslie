if (document.querySelector(`.menu__icon`)) {
    const menuBody = document.querySelector(`.menu__body`);
    document.querySelector(`.menu__icon`).addEventListener(`click`, function(e) {
        document.body.classList.toggle(`_lock`);
        document.querySelector(`.menu__icon`).classList.toggle(`_active`);
        menuBody.classList.toggle(`_active`);
    })
}

if(document.querySelector(`.body-main__form`)) {
    document.querySelector(`.body-main__form-btn`).addEventListener(`click`, (e) => {
        e.preventDefault()
        document.querySelector(`.body-main__form`).style.display = 'none'
        document.querySelector(`.body-main__answer`).style.display = 'block'
        
    })
}
