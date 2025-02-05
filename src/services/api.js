const getDataApi = (selectedHouse)=> {
    return fetch(`https://hp-api.onrender.com/api/characters/house/${selectedHouse}`)
    .then (res => res.json())
    .then (data => {
        // console.log("API'S response", data)

        const cleanData = data.map((item) =>{
            const placeholderImg = `https://placehold.co/300x400?text=${item.name}`

            return {
                id: item.id,
                img: item.image || placeholderImg,
                name: item.name,
                alive: item.alive,
                species: item.species,
                gender: item.gender,
                house: item.house,

            }
        });
        
        const sortedData = cleanData.sort((a, b) => a.name.localeCompare(b.name));

        // console.log(sortedData)
        return sortedData

    });
}

export default getDataApi;