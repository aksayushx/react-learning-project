const fs = require('fs');
const path = require('path');
const { ApolloServer, gql } = require('apollo-server');
var mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty13579',
    database: 'test'
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

let createContacts = `create table if not exists contacts(
    id int primary key auto_increment,
    name varchar(255)not null,
    email varchar(255)not null,
    message varchar(255)not null
)`;

connection.query(createContacts, function (err, results, fields) {
    if (err) {
        console.log(err.message);
    }
});


const title = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const subtitle = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";


let resolvers = {
    Query: {
        title: () => title,
        subtitle: () => subtitle,
        contacts: () => {
            let sql = `SELECT * FROM contacts`;
            return new Promise(function (resolve, reject) {
                connection.query(sql, function (err, result, fields) {
                    if (!err) resolve(JSON.parse(JSON.stringify(result))); // Hacky solution
                    else reject(err);
                });
            });
        }
    },
    Mutation: {
        post: (parent, args) => {
            const newContact = {
                name: args.name,
                email: args.email,
                message: args.message,
            }
            connection.query('INSERT INTO contacts SET ?', newContact, (err, res) => {
                if (err)
                    throw err;
                console.log('Last insert ID:', res.insertId);
            });
            return newContact;
        }
    }

}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});