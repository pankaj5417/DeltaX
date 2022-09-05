const express=require("express");
const app=express()
const {buildSchema}= require('graphql')
const {graphqlHTTP}=require('express-graphql')

const schema= buildSchema(`
type Query {
    products: [Product]
    orders:[Order]
   
}
type Product {
    id:ID!
    description:String!
    price: Float!
    reviews:[Review]
}
type Review {
    rating:Int!
    comment:String
}
type Order {
    date: String
    subtotal: Float!
    items:[OrderItem]
}
type OrderItem {
    product: Product!
    quantity:Int!
}
`)

const root={
    products:[
        {
            id:'redshoe',
            description:"Red Shoe",
            price:42.123,
        },
        {
            id:'bluejeans',
            description:"Blue Jeans",
            price:55.55,
        },
        {
            id:'redshirt',
            description:"Red Shirt",
            price:142.123,
        },
        {
            id:'top',
            description:"tops",
            price:421.123,
        }
    ],
    orders:[
        {
            date:'2019-09-09',
            subtotal:90.33,
            items:[
                {
                    product:{
                        id:"redshoe",
                        description:"old red shoe",
                        price:45.11,
                    },
                    quantity:3,
                }
            ]
        }
    ]
}

app.use("/graphql",graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true,
}))
app.listen(3000, ()=>{
    console.log("Running GraphQL server...")
})