# Telegram-Reservation-Bot
A Telegram bot that receives notifications of reservations made on a website and sends them to the store phone number.

# 📲 Telegram Reservation Bot

Un bot de Telegram conectado a una página web que envía automáticamente nuevas reservas al teléfono del restaurante a través de Telegram.


#🚀 ¿Qué hace este bot?

Cuando un cliente completa una reserva en tu sitio web, este bot:
- Recibe los datos de la reserva (nombre, teléfono, fecha, hora).
- Envía un mensaje instantáneo al número de Telegram del restaurante.
- Avisa en tiempo real sin necesidad de revisar el correo.

Ideal para restaurantes, cafés y negocios que aceptan reservas por su web.

---

🧰 Tecnologías utilizadas

- **Node.js** + **Express** — para el servidor backend.
- **node-telegram-bot-api** — para enviar mensajes al chat de Telegram.
- **dotenv** — para manejar configuraciones de entorno.

---

📦 Instalación

```bash
git clone https://github.com/eddie/telegram-reservation-bot.git
cd telegram-reservation-bot
npm install
⚙️ Configuración
Crea un archivo .env en la raíz del proyecto con:

env
Copy
Edit
TELEGRAM_BOT_TOKEN=tu_token_de_bot
TELEGRAM_CHAT_ID=tu_chat_id
Obtén tu token de bot desde @BotFather en Telegram.

Para obtener tu chat_id, envía un mensaje al bot y usa este script:

bash
Copy
Edit
curl https://api.telegram.org/botTU_TOKEN/getUpdates
▶️ Uso
Lanza el servidor con:

bash
Copy
Edit
npm start
Envía un POST a:

bash
Copy
Edit
POST http://localhost:3000/reservation
Con un cuerpo JSON como este:

json
Copy
Edit
{
  "name": "Juan Pérez",
  "phone": "67891234",
  "date": "2025-08-05",
  "time": "20:30"
}
El bot enviará un mensaje a Telegram con los datos de la reserva.

📤 Ejemplo del mensaje enviado
yaml
Copy
Edit
📥 Nueva Reserva
👤 Nombre: Juan Pérez
📞 Teléfono: 67891234
📅 Fecha: 2025-08-05
🕒 Hora: 20:30
🧪 Demo
Puedes hacer deploy fácilmente en Render o Railway.

📄 Licencia
MIT

💡 Ideas futuras
Conexión con Google Calendar

Confirmación automática al cliente

Dashboard de reservas

🤝 Contribuciones
¡Se aceptan contribuciones! Si deseas mejorar el bot o agregar funciones, crea un pull request.

👨‍💻 Autor
Eddie – GitHub
