const mysql = require('mysql2/promise')
import { User } from '../../../../public/backend'

export default async function loginHandler(req, res) {

    const databaseConnection = await mysql.createConnection({

        host: "localhost",
        database: "default",
        port: 3306,
        user: "root",
        password: "Nerftactics0!"
    });

    const {email, password} = req.body;

    try {

        const [result] = await databaseConnection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

        if (result.length > 0) {
            const {userID, name, password, email, student_ID, year, major, campus, bio} = result[0];
            const user = new User(userID, name, password, email, student_ID, year, major, campus, bio);
            res.status(200).json(user);
        } 

        else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }

    catch (error) {
        console.log('some error', error)
    }
    
    finally {
        databaseConnection.end();
    }
}