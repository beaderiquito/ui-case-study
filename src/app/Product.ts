export class Product{
    id: number;
    photo: string;
    name: string;
    price: number;
    reviews: any;
    description: string;

    constructor(id: number, photo: string, name:string, price:number, reviews:any, description:string){
        this.id = id;
        this.photo = photo;
        this.name = name;
        this.price = price;
        this.reviews = reviews;
        this.description = description;
    }
}
