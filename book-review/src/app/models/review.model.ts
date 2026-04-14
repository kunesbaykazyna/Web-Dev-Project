export interface Review {
  id: number;
  book: number;     
  user: number;   
  username?: string; 
  text: string;
  rating: number;   
  created_at: string;
}