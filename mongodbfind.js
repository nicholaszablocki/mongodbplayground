const {MongoClient, objectID} = require('mongodb');

MongoClient.connect('mongodb://localhost27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
  if(err){
    console.log(err);
    console.log)'-------------------------------------'
    return;
  }
  console.log('Connected to MongoDB server')
  let db = client.db('TodoApp');
  console.log('Connected to database: TodoApp');

  db.collection('Todos').find().toArray().then((docs)=>{
    //.then consumes a promise, its callback function
    //has access to the result of a successful async
    //request. .catch() is for errors
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err)=>{
    console.log(err)
  })

  //db.close();
})
