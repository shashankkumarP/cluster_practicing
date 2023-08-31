const cluster = require("cluster")
const os = require("os");
const TotalCpu = os.cpus().length;
const express = require("express");
    const app = express();
    const cors = require("cors");
    app.use(cors());
if(cluster.isMaster){
    for(let i=0;i<TotalCpu;i++){
        cluster.fork()
    }
    
}else{
    

    app.get("/",(req,res)=>{
        return res.status(200).send({"message":process.pid})
     })
     
     app.listen("8000",()=>{
         console.log("connected");
     })
     

}







