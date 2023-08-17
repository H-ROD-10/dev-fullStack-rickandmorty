import axios from "axios";
export const getCharacters = async (page) => {
    try {
        const response = await axios.post("https://rickandmortyapi.com/graphql", {
            query: `query {
                    characters(page: ${page}) {
                        results {
                            id
                            name
                            image
                            species
                            status
                        }
                        info{
                            count
                            pages
                            next
                            prev
                        }
                    }
                }`
        });
        return response.data.data.characters;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
