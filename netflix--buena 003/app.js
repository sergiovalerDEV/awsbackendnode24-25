const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

// Ruta de compras
app.get("/compras", (req, res) => {
  res.send("Bienvenido a la app de compras");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log('Para acceder desde fuera, usa la IP pública de tu instancia EC2');
});