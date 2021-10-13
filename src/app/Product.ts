export class Product{
    id: number;
    photo: string;
    name: string;
    price: number;
    reviews: any;

    constructor(id: number, photo: string, name:string, price:number, reviews:any){
        this.id = id;
        this.photo = photo;
        this.name = name;
        this.price = price;
        this.reviews = reviews;
    }
}
