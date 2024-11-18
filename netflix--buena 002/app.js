const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


app.get("/pedidos", (req, res) => {
  res.send("Bienvenido a la app de pedidos");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log('Para acceder desde fuera, usa la IP pública de tu instancia EC2');
});