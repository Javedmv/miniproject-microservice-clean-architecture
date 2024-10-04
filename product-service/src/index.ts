import { startServer } from './presentation/server'; // Update the import
import dbConnection from './infrastructure/database/dbConnection';

(async () => {
    try {
        await startServer(); // Start the server which includes DB connection
    } catch (error: any) {
        console.error("Error during initialization of server:", error);
        process.exit(1);
    }
})();
