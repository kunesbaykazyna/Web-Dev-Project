export interface Author {
    id: number;
    name: string;
}

export interface Book {
    id: number;
    title: string;
    author: Author;
    genre: string;
    description: string;
    cover_image: string;
    average_rating: number;
    published_year: number;
}