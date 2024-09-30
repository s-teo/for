import express from "express"
import { createProduct, getAllProducts } from "./db.js";

const app = express();
const PORT = 8080;

app.use(express.json()) //Middleware для обработки JSON данных

app.get('/api/products', (req,res) => {
    const products = getAllProducts();
    res.json(products);
})

app.post('/api/products', (req,res) => {
    const {name, price, category} = req.body;

    if (!name && !price && !category){
        return res.status(400).json({message:"Отправь полноценный ресурс!"})
    }

    const newProduct = createProduct({name, price, category});
    res.status(201).json(newProductj)
})

app.listen(PORT, () => {
    console.log(`Server is runnig on http://localhost:${PORT}`)
})