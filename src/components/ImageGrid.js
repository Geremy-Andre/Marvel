import React from 'react';
import { useFetchImage } from '../hooks/useFetchImage';
import { ImageGriditem } from './ImageGriditem';

export const ImageGrid = ({ category,number,tipos }) => {
    
    const { data: images, loading } = useFetchImage(category,number,tipos);
    console.log(images)
    return(
        <>
            <h3>{ category }</h3>
            { loading && <p>Loading...</p>}
            <div className="card ms-3">
            <div className="row">
                {
                    images.map((img) => (
                        <ImageGriditem
                            key = {img.id} 
                            title={img.name}
                            { ...img }  
                        />
                    ))
                }   
            </div>
            </div>
        </>
    )
}