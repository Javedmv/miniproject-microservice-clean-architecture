import dbConnections from './infrastructure/database/dbConnections';
import server from './presentation/server';

(async () => {
    try {
        server;
        await dbConnections();
    } catch (error: any) {
        console.error(error?.message || 'An error occured from server');
        process.exit(1)
    }
})();