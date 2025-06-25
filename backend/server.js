import app from "./app.js";
import config from "./src/config/index.js";
import MongoDB from "./src/utils/mongodb.util.js";

const PORT = config.app.port;

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database!");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.log(`Cannot connect to the database! ${error}`);
        process.exit();
    }
}

startServer();