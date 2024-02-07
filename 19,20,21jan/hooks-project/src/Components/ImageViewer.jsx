import React, { useEffect, useState } from 'react'
import "./style.css"

const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "41907237-9bca7dbc6f2a2bfc5279fd856"

const ImageViewer = () => {
    //hooks
    const [searchString, setSearchString] = useState("")
    const [images, setImages] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        const debouncedFunction = setTimeout(()=>{
            fetchData()
        },250)

        return(()=>{
            clearTimeout(debouncedFunction)
        })
       
    }, [searchString])

    //functions
    const handleSearch = (e) => {
        setSearchString(e.target.value)
    }

    async function fetchData() {
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

    console.log(images, "images")
    return (
        <div>
            <div>
                <input style={{width:"100%"}}type='text' value={searchString} onChange={handleSearch}></input>
            </div>
            <div className='image-grid'>
                {loading ?
                <span>Loading.....</span> :
                images.length && images.map((image) => {
                    return (
                        <div className='image'>
                            <img src={image.webformatURL}></img>
                            <p>{image.tags}</p>
                        </div>
                    )

                }
                )}
            </div>

        </div>
    )
}

export default ImageViewer