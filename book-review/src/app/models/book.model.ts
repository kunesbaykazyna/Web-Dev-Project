export interface Author {
    id: number;
    first_name: string;
    last_name: string;
    full_name: string;
    bio: string;
    birth_date: string;
    book_count: number;
}

export interface Book {
    id: number;
    title: string;
    author: Author;
    author_name: string;
    description: string;
    published_date: string;
    isbn: string;
    genre: string;
    cover_image: string;
    created_at: string;
    average_rating: number | null;
   
     image?: string;
     genre_name?: string;
     is_favorite:boolean;
}