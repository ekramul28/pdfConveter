import mongoose from "mongoose";
const servicesSchema = new mongoose.Schema({
    id: {
        type: Number,
        // require: true,
    },
    name: {
        type: String,
        // require: true,
    },
    bg_color: {
        type: String,
        // require: true,
    },
    image: {
        type: String,
        // require: true
    },
    feature: {
        type: String,
        // require: true,
    },
    benefit: {
        type: String,
        // require: true
    }
})

export const serviceModel = mongoose.models.services || mongoose.model("services", servicesSchema);
