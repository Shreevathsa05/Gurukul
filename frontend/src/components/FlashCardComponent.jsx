import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const API_BASE = "https://teachers-toolkit-ai-backend-latest.onrender.com";
const colors = {
  teal: "#006D77",
  mint: "#83C5BE",
  light: "#EDF6F9",
  peach: "#FFDDD2",
  tan: "#E29578",
};

export default function FlashCardComponent() {
  const { session } = useParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!session) return;
    fetchCards();
    // eslint-disable-next-line
  }, [session]);

  async function fetchCards() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/flashcards/${session}`);
      if (!res.ok) throw new Error("Failed fetching flashcards");
      const data = await res.json();
      setCards(data.flashcards || []);
    } catch (err) {
      setError(err.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ background: colors.light, minHeight: "100%", padding: 20 }}>
      <div style={{
        maxWidth: 920, margin: "0 auto", background: "#fff",
        borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        padding: 18, border: `4px solid ${colors.teal}`
      }}>
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ color: colors.teal }}>Flashcards</h2>
          <button onClick={fetchCards} style={btnStyle(colors.mint)}>Refresh</button>
        </header>

        {loading && <p>Loading…</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && cards.length === 0 && <p>No flashcards found.</p>}

        {cards.map((card, idx) => (
          <div key={idx} style={{ marginBottom: 12 }}>
            <div
              style={{
                padding: "10px 12px",
                background: colors.peach,
                borderRadius: 8,
                cursor: "pointer",
                border: `1px solid ${colors.tan}`,
              }}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
            >
              <strong style={{ color: colors.teal }}>{card.title}</strong>
              <span style={{ float: "right" }}>{expanded === idx ? "▲" : "▼"}</span>
            </div>
            {expanded === idx && (
              <div style={{
                padding: 12,
                background: "#fff",
                border: `1px solid ${colors.mint}`,
                borderTop: "none",
                borderRadius: "0 0 8px 8px"
              }}>
                {Array.isArray(card.body) ? (
                  <ul>{card.body.map((b, i) => <li key={i}>{b}</li>)}</ul>
                ) : <p>{card.body}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const btnStyle = (bg) => ({
  background: bg, border: "none", padding: "8px 12px",
  borderRadius: 8, cursor: "pointer", color: "#fff", fontWeight: 600
});
