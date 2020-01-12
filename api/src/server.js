const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const {models, db} = require('./db')


// Apollo server is made over express I can access the request and response 
// You can do data loaders and data sources to interact with another services
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context({req}){
      const jwt = req.headers.authorization
      throw new Error(nmqed)

      const user = models.User.findOne()
      return {models, db, user}
    }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
 