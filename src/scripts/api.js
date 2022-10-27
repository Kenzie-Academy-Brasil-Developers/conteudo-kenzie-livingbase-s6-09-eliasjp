export async function getPost (){
    const url = "https://m2-api-living.herokuapp.com/news"

    const fetching = await fetch (`${url}`, {
        method: "GET",
    })
    .then (resp => {
        return resp.json()
    })

    const postArray = fetching.news
    return postArray
}