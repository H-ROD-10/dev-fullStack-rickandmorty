export interface ICharacterApiResponse {
    data: {
        characters: {
            results: Character[];
            info: Info;
        }
    }
}

type Character = {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
}

type Info = {
    count: number;
    pages: number;
    next: string;
    prev: string;
}