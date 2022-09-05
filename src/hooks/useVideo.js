import { useState , useEffect } from "react";
import youtube from "../api/youtube";

const useVideo = (defaultSearch) =>{
    const [videos , setvideos] = useState([]);

    useEffect(() => {
        search(defaultSearch);
    }, [defaultSearch]);
    
    const search = async (term)=> {
        const response = await youtube.get('/search',{params: {q:term}});
        setvideos(response.data.items);
    };

    return (
        [ videos , search ]
    );
};
 
export default useVideo;