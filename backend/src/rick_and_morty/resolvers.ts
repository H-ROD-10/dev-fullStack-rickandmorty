import { getCharacters } from "./character.service.js";

export const resolvers = {
    Query: {
      characters: async (_, { page }: { page: number }) => {
        try {
          const response = await getCharacters(page);
          return response;
        } catch (error) {
          console.error('Error:', error); 
          throw error;
        }
      }
    },
  };

