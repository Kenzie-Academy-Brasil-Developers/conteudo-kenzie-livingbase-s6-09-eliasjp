import { checkNews } from "../../src/scripts/localStorage.js"

async function callPost (){
    const news = await checkNews ()
    console.log(news)
    const postMain = postDOM (news)
    const container = document.querySelector(`.container`)

    container.append(postMain)
}

function postDOM (object){
    const main = document.createElement(`main`)
          main.classList = `post`

    const postTitle = document.createElement(`h1`)
          postTitle.classList = `post-title text-style-1`
          postTitle.innerHTML = object.title

    const postDescription = document.createElement(`p`)
          postDescription.classList = `post-description text-style-4-r`
          postDescription.innerHTML = object.description

    const postImage = document.createElement(`img`)
          postImage.classList = `post-image`
          postImage.src = object.image
          postImage.alt = object.title

    const postContent = document.createElement(`p`)
          postContent.classList = `post-content text-style-4-r`
          postContent.innerHTML = object.content

    main.append(postTitle, postDescription, postImage, postContent)

    return main
}

callPost ()