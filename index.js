
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const produtos = require("./src/produtos/produtos.json")
const stock = require("./src/stock/stock.json")

app.get("/produtos", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://carrinho-three.vercel.app")
    return res.json(produtos)
})

app.get("/stock", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://carrinho-three.vercel.app")
    return res.json(stock)
})

app.listen(port, () => {
    console.log("Servidor está rodando...")
})