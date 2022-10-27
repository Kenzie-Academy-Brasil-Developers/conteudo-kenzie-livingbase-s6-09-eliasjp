export function createTrigger (){
    const main = document.querySelector(`.post-area`)
    
    const trigger = document.createElement(`div`)
          trigger.classList = `infinite-scroll-threshold`

    main.append(trigger)
}