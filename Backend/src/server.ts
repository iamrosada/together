import express from 'express';

const app = express();

app.get('/test',(request, response)=>{
 return response.send("hello");
});

app.listen(3333, ()=>{
    console.log('server is running');
})