import React, { useEffect, useState } from 'react'
import "./Style.css"

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "41907237-9bca7dbc6f2a2bfc5279fd856";

const Index = () => {
    //hooks
    const [searchString, setSearchString] = useState("");
    const [images, setImages] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        const debouncedFunction = setTimeout(()=>{
            fetchData();
        },2000)

        return(()=>{
            clearTimeout(debouncedFunction)
        })
       
    }, [searchString]);

    //functions
    const handleSearch = (e) => {
        setSearchString(e.target.value)
    };

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(searchString)}`);
            const result = await response.json();
            setImages(result.hits);
            setLoading(false);
        }
        catch (error) {
            alert(error);
            setLoading(false);
        }
    };

    console.log(images, "images");
    return (
        <div>
            <div className='search-container'>
                <input type='text' value={searchString} onChange={handleSearch} placeholder='Search...' required />
                <div className="search-icon"></div>
            </div>
            <div className='image-grid'>
                {loading ?
                <span>Loading.....</span> :
                images.length && images?.map((image,index) => {
                    
                    return (
                        <div className='image' key={index}>
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

export default index;