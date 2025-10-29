const {Schema,model} = require("mongoose");
const subjetSchema =  new Schema({
    name:{
        type:String
    }

})
const Subject = model("Subject",subjetSchema);


module.exports = Subject