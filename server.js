import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/icons", async (req, res) => {
  const API_KEY = process.env.API_KEY;

  try {
    const ghRes = await fetch(
      "https://api.github.com/repos/DevKittyJS/API/contents/icons",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "User-Agent": "DevKittyBackend"
        }
      }
    );

    const data = await ghRes.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "GitHub fetch failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});