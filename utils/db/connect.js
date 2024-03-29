import mongoose from "mongoose"

let connectionUrl;
const getConnectionString = () => {

    connectionUrl = process.env.DATABASE_LOCAL;
    connectionUrl = connectionUrl.replace(
        "<username>",
        process.env.DB_NAME
    );
    connectionUrl = connectionUrl.replace(
        "<password>",
        process.env.DB_PASSWORD
    );
    console.log(connectionUrl)

    return connectionUrl;
}

const connectDB = async () => {
    console.log('connecting to database')
    const mongoURL = getConnectionString()
    await mongoose.connect(mongoURL, { dbName: process.env.DATA_BASE_NAME });
    console.log("connected to database")

}
export default connectDB