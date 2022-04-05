if(document.querySelector(`.body-main__form`)) {
    document.querySelector(`.body-main__form-btn`).addEventListener(`click`, (e) => {
        e.preventDefault()
        document.querySelector(`.body-main__form`).style.display = 'none'
        document.querySelector(`.body-main__answer`).style.display = 'block'
        
    })
}
