import FileSync from 'lowdb/adapters/FileSync';
import low from 'lowdb';

export default function getDB() {
    const adapter = new FileSync('db.json');
    const db = low(adapter);
    db.defaults({ twitter: [], instagram: [] })
        .write()
    return db;
}