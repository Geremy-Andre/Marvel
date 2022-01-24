export const getImage = async(category,number,tipos) => {

    if(tipos==='Personajes'){
        const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${category}&ts=1&apikey=6d1a84d9cad250601bfc0a4c9d9cc438&hash=47cede48e0c6e16838aa208c0303c40e`
        const resp = await fetch(url);
        const {data} = await resp.json();
        const heroes = data.results
        const image = heroes.map( img => {
            return{
                id: img.id,
                name: img.name,
                url: `${img.thumbnail.path}.${img.thumbnail.extension}`
            }
        });
        return image;
    }
    else{
        const url = `https://gateway.marvel.com:443/v1/public/comics?title=${category}&ts=1&apikey=6d1a84d9cad250601bfc0a4c9d9cc438&hash=47cede48e0c6e16838aa208c0303c40e`
        const resp = await fetch(url);
        const {data} = await resp.json();
        const heroes = data.results
        const image = heroes.map( img => {
            return{
                id: img.id,
                name: img.name,
                url: `${img.thumbnail.path}.${img.thumbnail.extension}`
            }
        });
        return image;
    }
}