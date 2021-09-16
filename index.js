const express = require('express');

const server = express();

server.use(express.json());

const paciente = ['Victor','1,78','80'];

// retorna um paciente por id

server.get('/paciente/:index',(req,res)=>{
    const {index} = req.params;

    return res.json(paciente[index]);

});

// retorna geral 
server.get('/paciente',(req,res)=>{
    return res.json(paciente);
});


//insere 
server.post('/paciente',(req,res)=>{
    const{name}=req.body;
    paciente.push(name);

    return res.json(paciente);
});

//atualiza
server.put('/paciente/:index',(req,res)=>{
    const {index}=req.params;
    const {name} = req.body;

    paciente[index]=name;
    return res.json(paciente);
})

//remove
server.delete('/paciente/:index',(req,res)=>{
    const {index}=req.params;
    paciente.splice(index,1);

    return res.json({message:"O curso foi deetado"});

})

server.listen(3000);