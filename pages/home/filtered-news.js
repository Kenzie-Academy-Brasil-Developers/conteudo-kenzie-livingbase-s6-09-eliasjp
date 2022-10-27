import { getPost } from "../../src/scripts/api.js"
import { createTrigger } from "../home/scroll-trigger.js"

function queryCategories (){
    const query = document.querySelectorAll(`.button-category`)

    query.forEach(element => {
        element.addEventListener(`click`, async (e) => {
            const queryTrigger = document.querySelector(`.infinite-scroll-threshold`)

            if (queryTrigger){
                queryTrigger.remove()
            }

            query.forEach(button => {
                button.classList = `button-category button-light-grey text-style-4-sb`
            })

            e.target.classList = `button-category button-brand text-style-4-sb`

            const list = document.querySelector(`.post-list`)

            list.innerHTML = ""
        })
    })
}

queryCategories()