import { getPost } from "../../src/scripts/api.js"
import { newsCards } from "../home/create-card.js"
import { createTrigger } from "../home/scroll-trigger.js"

let currentPage = 0
async function renderPost (page){
      const news = await getPost (page)
      news.forEach(element => {
            newsCards(element)
      })
}

async function infScroll (){
      const trigger = document.querySelector(`.infinite-scroll-threshold`)

      const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
      }

      const observer = new IntersectionObserver(async (infTrigger) => {
            if (infTrigger[0].isIntersecting){
                  currentPage++
                  console.log(currentPage)
                  const news = await getPost (currentPage)
                  if (news.length != 0){
                        renderPost (currentPage)
                  } else {
                        trigger.remove()
                  }
            }
      }, options)

      observer.observe(trigger)
}

async function startRender (){
      createTrigger ()
      await renderPost (currentPage)
      infScroll ()
}

startRender ()