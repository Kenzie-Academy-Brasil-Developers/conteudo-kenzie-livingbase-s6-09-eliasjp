export function storageNews (object){
    window.localStorage.setItem("news-storage", JSON.stringify(object))
}

export function checkNews (){
    const post = window.localStorage.getItem("news-storage")
    const parsePost = JSON.parse(post)
    return parsePost
}