import mongoose from 'mongoose';

const Connection = async () => {
    try {   
        const URL = `mongodb+srv://Shihab-8141:12345@clone-inshort.y27pe.mongodb.net/INSHORT-CLONE?retryWrites=true&w=majority`;
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;