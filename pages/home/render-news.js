import { getPost } from "../../src/scripts/api.js"
import { newsCards } from "../home/create-card.js"
import { createTrigger } from "../home/scroll-trigger.js"
import { queryCategories, filterNews } from "../home/filtered-news.js"

let currentPage = 0
async function renderPost (news){
      news.forEach(element => {
            newsCards(element)
      })
}

async function buttonEvents (){
      const btnCategories = queryCategories ()
      const list = document.querySelector(`.post-list`)
      const news = await getPost (currentPage)

      btnCategories.forEach(btn => {
            btn.addEventListener(`click`, async (e) => {
                  currentPage = 0
                  if (e.target.innerHTML == "Todos"){
                        await renderPost (news)
                        currentPage++
                  }else {
                        while (!list.innerHTML && currentPage < 3){
                              const news = await getPost (currentPage)
                              const filteredNews = filterNews (news, e.target)
                              await renderPost (filteredNews)
                              currentPage++
                        }
                        while (currentPage < 3 && list.childNodes.length <= 2){
                              const news = await getPost (currentPage)
                              const filteredNews = filterNews (news, e.target)
                              await renderPost (filteredNews)
                              currentPage++
                        }
                  }
            })
      })
}

async function infScroll (){
      const trigger = document.querySelector(`.infinite-scroll-threshold`)
      const btnCategories = queryCategories ()
      const news = await getPost (currentPage)
      const list = document.querySelector(`.post-list`)

      

      const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
      }

      const observer = new IntersectionObserver(async (infTrigger) => {
            if (infTrigger[0].isIntersecting){
                  const news = await getPost (currentPage)
                  if (news.length != 0){
                        const buttons = [...btnCategories]
                        const filtered = buttons.filter(element => element.classList.contains("selected"))

                        if (filtered[0].innerHTML != "Todos"){
                              const filteredArray = filterNews (news, filtered[0])
                              console.log(filteredArray)
                              renderPost (filteredArray)
                              currentPage++
                        }else {
                              renderPost (news)
                              currentPage++
                        }
                  }
            }
      }, options)

      observer.observe(trigger)
}

async function startRender (){
      createTrigger ()
      buttonEvents ()
      infScroll ()
}

startRender ()