import { useEffect, useState } from "react";
import { getImage } from "../helpers/getImage";

export const useFetchImage = (category,number,tipos) =>{

    const [state, setState] = useState({
        data: [],
        loading: true 
    });
    useEffect(() => {
        getImage(category,number,tipos)
            .then( img => {
                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                    },)
                }, 3000);              
            });
    }, [category,number]);

    return state;
}