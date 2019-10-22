const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/gqlninja', {useNewUrlParser: true});
mongoose.connection.once('open',()=>{
    console.log('Connected to Database');
    var db = mongoose.connection;
    console.log(db);
});

/*;(async () => {
    const connector = mongoose.connect('mongodb+srv://alan:1234@gql-ninja-mlaim.mongodb.net/test?');
    console.log('Connected to Database');
})()
*/
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,()=>{
    console.log('now listening on port 4000');
});