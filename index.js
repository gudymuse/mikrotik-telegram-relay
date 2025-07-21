const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

const TOKEN = "7941977307:AAEMcSbTWLIjpS1E0i4hwGnaGfdAeU_y0G8";
const CHAT_ID = "7632479361";

app.get("/send", async (req, res) => {
  const message = req.query.text || "Pesan kosong";

  try {
    const response = await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
    });
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Telegram Relay Bot is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
