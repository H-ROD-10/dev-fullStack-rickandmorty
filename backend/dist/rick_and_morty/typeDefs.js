export const typeDefs = `#graphql

    type Character {
        id: Int
        name: String
        image: String
        species: String
        status: String
    }

    type Info {
        count: Int
        pages: Int
        next: String
        prev: String
    }

    type CharactersResponse {
        results: [Character]
        info: Info
    }


    type Query {
        characters(page: Int): CharactersResponse 
    }
`;
