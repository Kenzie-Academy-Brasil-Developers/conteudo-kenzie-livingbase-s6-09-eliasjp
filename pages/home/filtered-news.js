import { getPost } from "../../src/scripts/api.js"
import { createTrigger } from "../home/scroll-trigger.js"

export function queryCategories (){
    const query = document.querySelectorAll(`.button-category`)

    query.forEach(element => {
        element.addEventListener(`click`, async (e) => {
            const queryTrigger = document.querySelector(`.infinite-scroll-threshold`)

            if (!queryTrigger){
                createTrigger ()
            }

            query.forEach(button => {
                button.classList = `button-category button-light-grey text-style-4-sb`
            })

            e.target.classList = `button-category button-brand selected text-style-4-sb`

            const list = document.querySelector(`.post-list`)

            list.innerHTML = ""
        })
    })

    return query
}

export function filterNews (news, target){
    const filteredNews = news.filter(notice => {
        if (notice.category.toLowerCase() == target.innerHTML.toLowerCase()){
              return notice
        }
        })
    return filteredNews
}