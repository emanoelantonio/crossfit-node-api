const express = require("express"); 
const v1Router = require("./v1/routes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

// Apenas para fins de teste. 
// app.get("/", (req, res) => { 
//     res.send("<h2>Tudo ok com o servidor!</h2>"); 
// }); 
app.use("/api/v1", v1Router);

app.listen(PORT, () => { 
    console.log(`Servidor executando na porta: ${PORT}`); 
});