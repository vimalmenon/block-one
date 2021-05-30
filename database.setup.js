const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
    return sqlite.open({
        filename: './database.db',
        driver: sqlite3.Database,
    });
}
  
async function setup() {
    const db = await openDb();
    await db.migrate(
        { 
            migrationsPath: './migrations',
            force: 'last' 
        }
    );

    const customers = await db.all('SELECT * FROM customers');
    const accounts = await db.all('SELECT * FROM accounts');
    const transactions = await db.all('SELECT * FROM transactions');

    console.log('Database customers');
    console.log('----------------------------')
    console.log(JSON.stringify(customers, null, 2));
    console.log('----------------------------');


    console.log('Database accounts');
    console.log('----------------------------')
    console.log(JSON.stringify(accounts, null, 2));
    console.log('----------------------------')

    console.log('Database transactions');
    console.log('----------------------------')
    console.log(JSON.stringify(transactions, null, 2));
    console.log('----------------------------');

    console.log("Database has been initialized")
}

setup();

module.exports.openDb = openDb;