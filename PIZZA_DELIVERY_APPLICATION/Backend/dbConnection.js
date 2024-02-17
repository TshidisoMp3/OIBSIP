const moongoose = require('mongoose');
require('dotenv').config();

    const dbConnection = async () => {
        try {
            await moongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
            console.log('DB connected');
        } catch (error) {
            console.log('DB connection failed');
        }
    }

    module.exports = dbConnection;