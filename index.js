const express = require('express');
const app = express();
const productsRoutes = require("./routes/productroute");
const UserRoutes = require("./routes/userroute");
const cartRoute = require("./routes/cartroute");
const orderRoute=require("./routes/orderroute");
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect(
    "mongodb+srv://nandhini:nandy0302@cluster0.sk9wvzg.mongodb.net/e_commerce"
).then(() => {
    console.log("Connected to DataBase");
});

app.use("/products", productsRoutes);
app.use("/user", UserRoutes);
app.use("/cart", cartRoute); 
app.use("/order",orderRoute);


app.listen(3000, () => {
    console.log("Server is running on the port 3000");
});