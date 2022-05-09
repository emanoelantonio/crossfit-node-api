const express = require("express"); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

// Apenas para fins de teste. 
app.get("/", (req, res) => { 
    res.send("<h2>Tudo ok com o servidor!</h2>"); 
}); 

app.listen(PORT, () => { 
    console.log(`Servidor executando na porta: ${PORT}`); 
});