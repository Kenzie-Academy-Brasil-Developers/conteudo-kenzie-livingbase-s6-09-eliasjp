export async function getPost (page){
    const url = "https://m2-api-living.herokuapp.com/news"

    const fetching = await fetch (`${url}?page=${page}`, {
        method: "GET",
    })
    .then (resp => {
        return resp.json()
    })

    const postArray = fetching.news

    return postArray
}