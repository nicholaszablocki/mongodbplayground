const MongoClient = require('mongodb').MongoClient;
//alternative way to get the MongoClient below
//const {MongoClient} = require('mongodb');
//this destructures mongodb, which is an object, and then saves the value of
//the key that has the name MongoClient, and saves it to the const MongoClient
//we can use destructuring to pull off other things from mongodb, other values based
//on their key name

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client)=>{
  if(err){
    console.log(err);
    console.log('UNABLE TO CONNECT TO MONGODB SERVER');
    return;
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  //so what returns is the client, the MongoClient from earlier. Now, the client, the thing
  //we connect to the mongodb server with through node, has a method called cd that lets us select a
  //particular database(which is a kind of datastruct) by passing the name of it as an argument
  //if that particular database does not exist, mongodb native will create it for us. then we save it
  //as a constant.

  //so first, we create a constant called MongoClient, which is the client from the mongo database module
  //a client just lets you connect to the mongodatabase server through node.
  //now the client has a method called connect, we pass it the server we want to connect to, and a callback
  //function that takes 2 arguments, error and client. now if the connection fails we get an error, if it succeeds
  //then we get the client, which is now connected to that particular server. the client has a method attached
  //to it called db which allows us to access a particular database by passing the name of it as an argument,
  //we then save that database to a constant

  //

db.collection('Users').insertOne({
  //a collection is a table in sql, a part of the database
  //that contains everything that is related. now all databases have access to a method
  //called collection. this allows us to access collections by passing their names in as an argument.
  //all collections have methods that allow you to insert documents into them
  //an alternative way of writing the above would be
  //let x = db.collection('Users');
  //x.insertOne({})
  //ORRRRRR
  //client.db('TodoApp').collection('Users').insertOne({})

  //client.db() connects us to a particular database, db.collection connects us to a particular database
  name:'Nick',
  age:29,
  location:'Burlington'
}, (err, result)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(JSON.stringify(result.ops, undefined, 2))
});

  client.close();
});
