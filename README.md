## Node JS Notes

#### Global objects in Node

Global Objects in Node is similar to the Global Window Object in the browser.

    Broswer: Window -> returns all accessible methos within the object
    node: Gloable return all the accessible methods

#### NB:-

Accessing Files

    __dirname -> returns the absolute path of file
    __filname - > return the absolute path of file with the ile name

#### Modules import and Export Modularity in node js
exporting file name: resources.js  
importing files name: app.js

    const values = [23,"hey","johne", true]
    const values2 = [...values]

    // export multiple rescources
    modules.export = {values, values2}

    const {values, values2} = require("./resources.js") //import destructuring


#### FileSstems Operations in Node
        const fs = require('fs')
        
        // reading file
        fs.readFile(<dir>, (err, data) => { //async fxn
            if(err){log(err)}
            log(data.toString)
        })

        // writing files
        fs.writeFile(<dirToWriteTo>, data, (err) =>{
            ...code
        })

        // making Directories
        check if dir exists

        if(!fs.existsSync(<Dir>)){
            fs.mkdir(<dir name>, (err)=>{ // rmdir removes a directories
                ... log message
            })
        }

        // deletings files

        if(fs.existsSync(<path to file>)){
            fs.unlink("path to file", (err)=>{
                .. log err if found
            })
        }
### Streams and Buffers for large files

- ## Streams
- ## Buffers

- [ ]   Read Streams 
- [ ]   Write Streams  

Using Streams data can be used while it's loading 

        const readStream = fs.createReadStream(<path>, {encoding: "utf8})

        const writeStream = fs.createWriteStream(<path>, {encoding: "utf8})
    
    readStream.on('data', (chunck)=>{
        writeStream.write('\n Chunk \n')
    })

    // piping
    reading data from read stream into the  write stream
    // much easier
    readStream.pipe(writeStream)
setHeader - > redirect to a particular screen.

#### Express MiddleWares
 it's simply functions or peac of code that run between the request coming in and the response going out of the server.    
 ##### Uses of Middleware can be used in: 
 - As a logger for looing details of every request
 - Authentication check middleware for protected Routes
 - Middleware to parse json data from request
 - Return 404 pages
 ``` 
 for example: 
 the use((res, req)) // we use for displaying th e 404 pages.
 // the use fxn runs for every request sent the Browser