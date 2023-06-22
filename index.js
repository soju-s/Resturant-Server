// import json server\
const jsonServer=require('json-server')

const server=jsonServer.create()

// setup path for db.json
const router=jsonServer.router('db.json')

// using a middleware to run json

const middleware=jsonServer.defaults()

// to setup port number 
const port=process.env.PORT || 4000

server.use(middleware)
server.use(router)

server.listen(port,()=>{
    console.log(`json server started at port ${port}`);
})