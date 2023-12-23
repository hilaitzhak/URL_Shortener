import { AppServer } from "./src/models/server";

const main = async () => {
    const server = new AppServer();
    await server.init();
    server.listen();
}

main();