import axios from "axios";
import { ICharacterApiResponse } from "./interfaces/Characters.interface.js";

    export const getCharacters = async (page: number) => {
        try {
            const response = await axios.post<ICharacterApiResponse>("https://rickandmortyapi.com/graphql", {
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
            return response.data.data.characters 
        } catch (error) {
            throw new Error(error.message);
        }
    }

