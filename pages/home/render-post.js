import { getPost } from "../../src/scripts/api.js"
import { storageNews } from "../../src/scripts/localStorage.js"

let currentPage = 0
async function renderPost (page){
    const news = await getPost (page)
    console.log(news[0])
    news.forEach(element => {
        newsCards(element)
    })
}

function newsCards (object){
    const list = document.querySelector(`.post-list`)

    const card = document.createElement(`li`)
          card.classList = `news-card`

    const cardImage = document.createElement(`img`)
          cardImage.classList = `card-image`
          cardImage.src = object.image
          cardImage.alt = object.title

    const cardTitle = document.createElement(`h2`)
          cardTitle.classList = `card-title text-style-3`
          cardTitle.innerHTML = object.title

    const cardDesc = document.createElement(`p`)
          cardDesc.classList = `card-description text-style-4-r`
          cardDesc.innerHTML = object.description

    const cardLink = document.createElement(`button`)
          cardLink.classList = `card-link text-style-4-sb`
          cardLink.innerHTML = `Acessar conteúdo`
          cardLink.addEventListener(`click`, () => {
            storageNews (object)
            window.location.assign(`../../pages/post/index.html`, `_self`)
          })

    list.append(card)
    card.append(cardImage, cardTitle, cardDesc, cardLink)
}

renderPost (currentPage)