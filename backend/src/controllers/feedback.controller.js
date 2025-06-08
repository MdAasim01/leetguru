import OpenAI from "openai";
import { db } from "../libs/db.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getCodeFeedback = async (req, res) => {
  try {
    const { code, language, testCases } = req.body;
    const userId = req.user.id;

    if (!code || !language) {
      return res.status(400).json({ error: "Missing code or language" });
    }

    // ✅ 1. Check coin balance
    const user = await db.user.findUnique({ where: { id: userId } });
    if (!user || user.coins < 3) {
      return res.status(400).json({ error: "Not enough coins to generate feedback" });
    }

    // ✅ 2. Deduct 3 coins and log transaction
    await db.user.update({
      where: { id: userId },
      data: { coins: { decrement: 3 } },
    });

    await db.coinTransaction.create({
      data: {
        userId,
        amount: -3,
        reason: "AI Feedback Request",
      },
    });

    // ✅ 3. Call OpenAI
    const prompt = [
      {
        role: "system",
        content: "You are a senior software engineer helping candidates improve their code. Give precise, constructive feedback on correctness, readability, time/space complexity, and suggest improvements.",
      },
      {
        role: "user",
        content: `Here is a user's code submission in ${language}:\n\n${code}\n\nHere are the test case results:\n${JSON.stringify(testCases, null, 2)}\n\nPlease give detailed, but concise feedback.`,
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: prompt,
    });

    const feedback = response.choices?.[0]?.message?.content || "No feedback generated.";

    return res.status(200).json({ feedback });
  } catch (error) {
    console.error("OpenAI Feedback Error:", error.message);
    return res.status(500).json({ error: "Failed to generate feedback" });
  }
};
