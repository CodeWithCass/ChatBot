import { connect, disconnect } from 'mongoose';
async function connectToDatabase() {
    try {
        //process.env.MONGODB_URL
        await connect("mongodb+srv://cassperkett:r0hIN0Vjx3sgFNiy@cluster0.beybai5.mongodb.net/chatbot?retryWrites=true&w=majority&appName=Cluster0");
    }
    catch (error) {
        console.log(error);
        throw new Error('Cannot connect to DB');
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error('Cannot disconnect from DB');
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map