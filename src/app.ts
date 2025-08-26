import "dotenv/config"; 
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";

(() => {
  main();
})();

function main() {
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  const server = new Server(port, AppRoutes.routes);

  server.start();
}