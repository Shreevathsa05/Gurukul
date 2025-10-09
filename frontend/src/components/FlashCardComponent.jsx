import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const colors = {
  teal: "bg-teal-700 text-white",
  mint: "bg-teal-300 text-black",
  peach: "bg-orange-100 text-teal-700",
  tan: "bg-orange-400 text-white",
  light: "bg-gray-50",
};

const API_BASE = "https://teachers-toolkit-ai-backend-latest.onrender.com";

export default function FlashCardComponent() {
  const { session } = useParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (session) fetchCards();
  }, [session]);

  const fetchCards = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/flashcards/${session}`);
      if (!res.ok) throw new Error("Failed fetching flashcards");
      const data = await res.json();
      setCards(data.cards || []); // correct destructure here
      setIndex(0);
      setFlipped(false);
    } catch (err) {
      setError(err.message || "Error fetching flashcards");
    } finally {
      setLoading(false);
    }
  };

  const nextCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;
  if (!cards.length) return <p className="text-center mt-10">No flashcards found.</p>;

  const card = cards[index];

  return (
    <div className={`min-h-screen p-10 ${colors.light}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-700">Flashcards</h2>

        {/* Flashcard */}
        <div
          className="relative w-96 h-64 mx-auto my-10 cursor-pointer perspective"
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""}`}
          >
            {/* FRONT */}
            <div className="absolute w-full h-full bg-orange-100 text-teal-700 rounded-xl shadow-lg flex flex-col justify-center items-center backface-hidden p-5">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-gray-700">Tap to reveal answer</p>
            </div>

            {/* BACK */}
            <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex flex-col justify-center items-start backface-hidden transform rotate-y-180 p-5 overflow-auto">
              {Array.isArray(card.body) ? (
                <ul className="list-disc pl-5 space-y-1">
                  {card.body.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : (
                <p>{card.body}</p>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 rounded-lg bg-teal-700 text-white font-semibold" onClick={prevCard}>
            ◀ Prev
          </button>
          <button className="px-4 py-2 rounded-lg bg-teal-300 text-black font-semibold" onClick={fetchCards}>
            ⟳ Refresh
          </button>
          <button className="px-4 py-2 rounded-lg bg-orange-400 text-white font-semibold" onClick={nextCard}>
            Next ▶
          </button>
        </div>

        <p className="mt-4">Card {index + 1} of {cards.length}</p>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

// const API_BASE = "https://teachers-toolkit-ai-backend-latest.onrender.com";
// const colors = {
//   teal: "#006D77",
//   mint: "#83C5BE",
//   light: "#EDF6F9",
//   peach: "#FFDDD2",
//   tan: "#E29578",
// };

// export default function FlashCardComponent() {
//   const { session } = useParams();
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [expanded, setExpanded] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!session) return;
//     fetchCards();
//     // eslint-disable-next-line
//   }, [session]);

//   async function fetchCards() {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(`${API_BASE}/flashcards/${session}`);
//       if (!res.ok) throw new Error("Failed fetching flashcards");
//       const data = await res.json();
//       setCards(data.flashcards || []);
//     } catch (err) {
//       setError(err.message || "Error");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div style={{ background: colors.light, minHeight: "100%", padding: 20 }}>
//       <div style={{
//         maxWidth: 920, margin: "0 auto", background: "#fff",
//         borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
//         padding: 18, border: `4px solid ${colors.teal}`
//       }}>
//         <header style={{ display: "flex", justifyContent: "space-between" }}>
//           <h2 style={{ color: colors.teal }}>Flashcards</h2>
//           <button onClick={fetchCards} style={btnStyle(colors.mint)}>Refresh</button>
//         </header>

//         {loading && <p>Loading…</p>}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {!loading && cards.length === 0 && <p>No flashcards found.</p>}

//         {cards.map((card, idx) => (
//           <div key={idx} style={{ marginBottom: 12 }}>
//             <div
//               style={{
//                 padding: "10px 12px",
//                 background: colors.peach,
//                 borderRadius: 8,
//                 cursor: "pointer",
//                 border: `1px solid ${colors.tan}`,
//               }}
//               onClick={() => setExpanded(expanded === idx ? null : idx)}
//             >
//               <strong style={{ color: colors.teal }}>{card.title}</strong>
//               <span style={{ float: "right" }}>{expanded === idx ? "▲" : "▼"}</span>
//             </div>
//             {expanded === idx && (
//               <div style={{
//                 padding: 12,
//                 background: "#fff",
//                 border: `1px solid ${colors.mint}`,
//                 borderTop: "none",
//                 borderRadius: "0 0 8px 8px"
//               }}>
//                 {Array.isArray(card.body) ? (
//                   <ul>{card.body.map((b, i) => <li key={i}>{b}</li>)}</ul>
//                 ) : <p>{card.body}</p>}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const btnStyle = (bg) => ({
//   background: bg, border: "none", padding: "8px 12px",
//   borderRadius: 8, cursor: "pointer", color: "#fff", fontWeight: 600
// });
