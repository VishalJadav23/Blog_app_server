const { default: mongoose } = require("mongoose");

const ConnectionDB=()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/BlogAppRedux")
        console.log("DB Connection Established")
    } catch (error) {
        console.log("DB Connection Loss")
        
    }
}

module.exports=ConnectionDB
