import { GoogleGenAI } from "@google/genai";

const systemInstruction = `
You are "Blessings Bot", a helpful virtual assistant for Blessings Medical Clinic.
The clinic is located at 415 Elsbree St, Suite 201, Fall River, MA. Phone: 617-251-5065.
Your tone is "Compassionate Clinical" - warm, professional, and reassuring.

Guidelines:
1. You can answer questions about:
   - Clinic location and phone number.
   - General services offered (Primary Care, Urgent Care, Pediatrics, etc.).
   - Accepted insurances (Blue Cross, United, Aetna, Cigna, Medicare, MassHealth, etc.).
   - The difference between ER and Urgent Care (Wait times, Cost).
2. IMPORTANT: You CANNOT give specific medical diagnosis or treatment advice.
   - If a user describes severe symptoms (chest pain, trouble breathing, heavy bleeding), tell them to call 911 or go to the ER immediately.
   - For minor symptoms, suggest they book an appointment.
3. Keep responses concise (under 3 sentences unless asked for details).
4. Always be polite.
`;

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const ai = getAiClient();
    const model = ai.models.getGenerativeModel({
      model: "gemini-2.5-flash", // Using Flash for speed/efficiency in a chat widget
      systemInstruction: systemInstruction,
    });

    const result = await model.generateContent({
      contents: message,
    });
    
    return result.response.text() || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the service. Please call us at 617-251-5065.";
  }
};
