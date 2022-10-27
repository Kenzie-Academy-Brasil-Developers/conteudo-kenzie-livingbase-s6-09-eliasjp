export function storageNews (object){
    window.localStorage.setItem("news-storage", JSON.stringify(object))
}