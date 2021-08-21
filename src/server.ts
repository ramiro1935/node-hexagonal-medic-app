import app from './app';
import { DatabaseBootstrap } from './bootstrap/database.bootstrap';
import { ServerBootstrap } from './bootstrap/server.bootstrap';

const databaseBootstrap = new DatabaseBootstrap();
const serverBootstrap = new ServerBootstrap(app);

(async () => {
  try {
      await databaseBootstrap.initialize()
    await serverBootstrap.initialize();
  } catch (error) {
    console.log(error);
    databaseBootstrap.closeConnection()
    process.exit(1) // Aplicacion de node se cierra por error
  }
})();
