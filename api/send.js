import axios from "axios";

export default async function handler(req, res) {
  const TOKEN = "ISI_TOKEN_BOT_KAMU";
  const CHAT_ID = "ISI_CHAT_ID_KAMU";

  const text = req.query.text || "Pesan kosong";

  try {
    const response = await axios.get(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      params: { chat_id: CHAT_ID, text }
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
