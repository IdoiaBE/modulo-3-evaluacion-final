const getDataApi = (selectedHouse)=> {
    return fetch(`https://hp-api.onrender.com/api/characters/house/${selectedHouse}`)
    .then (res => res.json())
    .then (data => {
        // console.log("API'S response", data)

        const cleanData = data.map((item) =>{
            const placeholderImg = `https://placehold.co/300x400?text=${item.name}`

            const gender = item.gender === "female" ? "Mujer" : "Hombre"

            const isAlive = () => `${item.alive ? "Viv" : "Muert"}${item.gender === "female" ? "a" : "o"}`;


            return {
                id: item.id,
                img: item.image || placeholderImg,
                name: item.name,
                altNames: item.alternate_names, //es un array
                livingStatus: isAlive,
                species: item.species,
                gender: gender,
                house: item.house,

            }
        });
        
        const sortedData = cleanData.sort((a, b) => a.name.localeCompare(b.name));

        // console.log(sortedData)
        return sortedData

    });
}

export default getDataApi;