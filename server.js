import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// ✅ test API endpoint
app.get("/api/secret-test", (req, res) => {
  res.json({
    ok: true,
    message: "THE API Exists",
    secretLoaded: Boolean(process.env.API_KEY)
  });
});

// optional health check
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log("🔐 Secret present:", Boolean(process.env.API_KEY));
});