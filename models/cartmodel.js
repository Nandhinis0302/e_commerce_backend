const mongoose=require('mongoose');

const cartschema=mongoose.Schema({
    user_id:String,
    products:[{
        product_id:String,
        quantity:Number
    },
]
})

const cart=mongoose.model("cart",cartschema);
module.exports=cart