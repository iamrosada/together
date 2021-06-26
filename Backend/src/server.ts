import express from 'express';

const app = express();


app.get('/test',(request, response)=>{
 return response.send("ola");
});

app.listen(3333, ()=>{
    console.log('server is running');
})