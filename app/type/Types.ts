export type CarItem = {
    id: number;
    make: string;
    model: string;
    year: string;
    image: string;
    price: string
  };


  
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export type Comment = {
  id: number;
  text: string;
}
