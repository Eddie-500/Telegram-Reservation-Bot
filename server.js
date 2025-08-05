require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sendTelegramMessage = require('./telegram');

const app = express();
app.use(bodyParser.json());

app.post('/reservation', (req, res) => {
  const { name, phone, date, time } = req.body;

  if (!name || !phone || !date || !time) {
    return res.status(400).json({ error: 'Missing data' });
  }

  const message = `📥 *Nueva Reserva*
👤 Nombre: ${name}
📞 Teléfono: ${phone}
📅 Fecha: ${date}
🕒 Hora: ${time}`;

  sendTelegramMessage(message)
    .then(() => res.status(200).json({ status: 'Sent to Telegram' }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
