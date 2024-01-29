import mongoose from "mongoose";
const servicesSchema = mongoose.Schema({

    id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true
    },
    feature: {
        type: String,
        require: true,
    },
    benefit: {
        type: String,
        require: true
    }
})

const serviceModel = mongoose.model("Services", servicesSchema);
export default serviceModel;