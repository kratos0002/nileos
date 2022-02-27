import bcrypt from 'bcryptjs'

const data = {

    users: [
        {
        name:'Vishal',
        email: 'admin@nileos.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true
         },

        {
            name:'Ananya',
            email: 'ananya@nileos.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        },



],


    products:[
        {   
            name: 'Three body problem',
            category: 'SciFi',
            image: '../images/p1.jpg',
            price: 120,
            countInStock:10,
            author: 'Cixin Liu',
            rating: 4.5,
            numReviews:10,
            description: 'wonderful scifi'
        },
        {   
        name: 'Gardens of the Moon',
        category: 'High Fantasy',
        image: '../images/p2.jpg',
        price: 120,
        countInStock:10,
        author: 'Cixin Liu',
        rating: 4.5,
        numReviews:10,
        description: 'wonderful scifi'
        },
        {  
        name: 'Deadhouse Gates',
        category: 'High Fantasy',
        image: '../images/p3.jpg',
        price: 120,
        countInStock:10,
        author: 'Cixin Liu',
        rating: 4.5,
        numReviews:10,
        description: 'wonderful scifi'
        },
        {  
        name: 'Memories of Ice',
        category: 'SciFi',
        image: '../images/p4.jpg',
        price: 120,
        countInStock:1,
        author: 'Cixin Liu',
        rating: 4.5,
        numReviews:10,
        description: 'wonderful scifi'
        },
        {  
         name: 'House of Chains',
         category: 'SciFi',
         image: '../images/p5.jpg',
         price: 120,
         countInStock:10,
         author: 'Cixin Liu',
         rating: 4.5,
         numReviews:10,
         description: 'wonderful scifi'
        },
        {  
        name: 'Dark Forest',
        category: 'SciFi',
        image: '../images/p6.jpg',
        price: 430,
        countInStock:0,
        author: 'Cixin Liu',
        rating: 4.5,
        numReviews:10,
        description: 'wonderful scifi'
       },
       {  
        name: 'Game of Thrones',
        category: 'Fantasy',
        image: '../images/p7.jpg',
        price: 500,
        countInStock:19,
        author: 'George R.R Marting',
        rating: 4.5,
        numReviews:10,
        description: 'Immersive'
       },
    ]

}

export default data;