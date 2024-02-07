const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "41907237-9bca7dbc6f2a2bfc5279fd856"

export default async function fetchData() {
    setLoading(true)
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(searchString)}`)
        const result = await response.json()
        setImages(result.hits)
        setLoading(false)
    }
    catch (error) {
        alert(error)
        setLoading(false)
    }
}