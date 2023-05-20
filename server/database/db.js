import mongoose from "mongoose"





 const Connection = async (username,password) =>{
    const URL=`mongodb://${username}:${password}@ac-xndxfgi-shard-00-00.bsuujwy.mongodb.net:27017,ac-xndxfgi-shard-00-01.bsuujwy.mongodb.net:27017,ac-xndxfgi-shard-00-02.bsuujwy.mongodb.net:27017/?ssl=true&replicaSet=atlas-13j9ns-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with database',error);
    }
}
export default Connection;