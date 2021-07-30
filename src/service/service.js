import axios from 'axios'

export const getStarshipsByPageandSearchText = async (page, searchText) => {
    let starships
    let pageInfo
    await axios
        .get(`https://swapi.dev/api/starships/?page=${page}&search=${searchText}`)
        .then((response) => {
            starships = response.data.results
            pageInfo = response.data.next})
        .catch((error) => error);

    return {starships , pageInfo}
}

export const getStarship = async (id) => {
    let starship
    await axios
        .get(`https://swapi.dev/api/starships/${id}/`)
        .then((response) => (starship = response.data))
        .catch((error) => error)

    return starship          
}