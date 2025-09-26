
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getRetrievalDecision(
  query,
  summary,
  history
) {
  const historyText = history.map(h => `${h.role}: ${h.content}`).join("\n");

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `Given the response according to Summary of uploaded resources, recent chat history, and latest user question,
decide whether retrieval from the vector DB is required.

Return JSON:
- reqd: boolean
- retrievalQuery: string

Summary of uploaded resources:
${summary}

Recent chat history:
${historyText}

latest user question
${query}`,
        },
      ],
    },
  ];

  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "object",
        properties: {
          reqd: { type: "boolean" },
          retrievalQuery: { type: "string" },
        },
        required: ["reqd", "retrievalQuery"],
      },
    },
  });
console.log("Retrieval decision response:", response.candidates[0].content.parts[0].text);
  return JSON.parse(response.candidates[0].content.parts[0].text);
}