const app = require('./src/app');
const env = require('./src/config/env');
const seedAdmin = require('./src/startup/seedAdmin');

async function start() {
    await seedAdmin();

    app.listen(env.PORT, () => {
        console.log(`Laboratorio API CRUD ejecutándose en htto://localhost:${env.PORT}`);
    });
}

start();
