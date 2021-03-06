import { Product } from "./Product";

export const PRODUCTS: Product[] =[
    {
        id: 1,
        photo: '../assets/img/products/plain-butter-croissant.jpg',
        name: 'Plain Butter Croissant',
        price: 105,
        description: 'Our croissant is a buttery, crescent-shaped French pastry. Enjoy this light, flaky, and delicately sweet croissant freshly made everyday. Enjoy one with a cup of coffee — to boost your productivity while enjoying this delicious treat.',
        reviews: [
        {
        username: 'username1', 
        date: 'April 20, 2021', 
        content: 'This is review # 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 4},
        {
        username: 'username2', 
        date: 'April 20, 2021', 
        content: 'This is review # 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 2},
        {
        username: 'username3', 
        date: 'April 20, 2021', 
        content: 'This is review # 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 4}]
    },
    {
        id: 2,
        photo: '../assets/img/products/apple-danish.jpg', 
        name: 'Apple Danish', 
        price: 125, 
        description: 'Apple danish is the perfect way to welcome the cold season! The flaky crust, apple pie filling, crumb topping, and simple glaze make them irresistible. They make for a perfect snack but are also great for your cheat days.',
        reviews: [{
        username: 'username1',
        date: 'April 20, 2021',
        content: 'This is review # 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.',
        stars: 5},
        {
        username: 'username2', 
        date: 'April 20, 2021', 
        content: 'This is review # 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 2},
        {
        username: 'username3', 
        date: 'April 20, 2021', 
        content: 'This is review # 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 3}]
    },
    {
        id: 3, 
        photo: '../assets/img/products/french-toast.jpg', 
        name: 'French Toast', 
        price: 150,
        description: 'Our french toast is made of thick slices of brioche bread dipped in milk and eggs, then pan fried in butter goodness. Each serving gives you two slices of bread topped with butter, syrup, powdered sugar, and some of your favorite berries.',
        reviews: [{
        username: 'username1',
        date: 'April 20, 2021',
        content: 'This is review # 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.',
        stars: 2},
        {
        username: 'username2', 
        date: 'April 20, 2021', 
        content: 'This is review # 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 1},
        {
        username: 'username3',
        date: 'April 20, 2021', 
        content: 'This is review # 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 1}] 
    },
    {
        id: 4, 
        photo: '../assets/img/products/four-cheese-flatbread.jpg', 
        name: 'Four Cheese Flatbread', 
        price: 130,
        description: 'Our four cheese flatbread is perfect all the cheese-lovers out there. This snack is made of pizza dough, topped with provolone, mozzarella, parmesan, and ricotta, oven-baked to perfection.',
        reviews: [{
        username: 'username1', 
        date: 'April 20, 2021', 
        content: 'This is review # 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 5},
        {
        username: 'username2', 
        date: 'April 20, 2021', 
        content: 'This is review # 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 5},
        {
        username: 'username3', 
        date: 'April 20, 2021', 
        content: 'This is review # 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 4}]
    },
    {
        id: 5,
        photo: '../assets/img/products/cinnamon-roll.jpg',
        name: 'Cinnamon Roll',
        price: 120,
        description: 'Our cinnamon roll is filled with a generous cinnamon-sugar filling. Made with a rich dough leavened with yeast, topped with a soft cream cheese frosting.',
        reviews: [{
        username: 'username1', 
        date: 'April 20, 2021', 
        content: 'This is review # 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 3},
        {
        username: 'username2', 
        date: 'April 20, 2021', 
        content: 'This is review # 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 3},
        {
        username: 'username3', 
        date: 'April 20, 2021', 
        content: 'This is review # 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 2}]
    },
    {
        id: 6, 
        photo: '../assets/img/products/white-chocolate-macademia-cookie.jpg', 
        name: 'White Chocolate Macademia Cookie', 
        price: 95, 
        description: 'This scrumptious, satisfying cookie love will uplift your day—sweet white chocolate chips and chopped macademia nuts embedded in a thick, chewy goodness of our favorite dough make this an absolute must-have.',
        reviews: [{
        username: 'username1', 
        date: 'April 20, 2021', 
        content: 'This is review # 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 5},
        {
        username: 'username2', 
        date: 'April 20, 2021', 
        content: 'This is review # 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 3},
        {
        username: 'username3', 
        date: 'April 20, 2021', 
        content: 'This is review # 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 1}]
    },
    {
        id: 7, 
        photo: '../assets/img/products/pain-au-chocolat.png', 
        name: 'Pain Au Chocolat', 
        price: 130, 
        description: 'Classic BreadStop pain au chocolat made with our flaky croissant dough rolled with 3 batons of luscious dark chocolate, baked to golden brown perfection.',
        reviews: [{
        username: 'username1', 
        date: 'April 20, 2021', 
        content: 'This is review # 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 3},
        {
        username: 'username2', 
        date: 'April 20, 2021', 
        content: 'This is review # 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 4},
        {
        username: 'username3', 
        date: 'April 20, 2021', 
        content: 'This is review # 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 1}]
    },
    {
        id: 8, 
        photo: '../assets/img/products/chocolate-glazed-doughnut.jpg', 
        name: 'Chocolate Glazed Doughnut', 
        price: 90, 
        description: 'A signature doughnut glazed with silky and smooth chocolate—made with old-fashioned scrumptiousness.',
        reviews: [{
        username: 'username1', 
        date: 'April 20, 2021', 
        content: 'This is review # 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 5},
        {
        username: 'username2', 
        date: 'April 20, 2021', 
        content: 'This is review # 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 4},
        {
        username: 'username3', 
        date: 'April 20, 2021', 
        content: 'This is review # 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, ante ac sagittis viverra, ante nunc commodo nibh, ut pulvinar felis velit in leo. Nam lorem lorem, rutrum in quam in, mattis vulputate sem.', 
        stars: 2}]
    }
];