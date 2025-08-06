const OpenAI = require("openai");
const {decrementToken,get_Member} = require('../DALs/users_dal')

// Chemin vers ton fichier
const fs = require('fs');
const path = require('path');

// Lecture du fichier .txt
const filePath = path.join(__dirname, '../predefinded.txt');
const content = fs.readFileSync(filePath, 'utf8');


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "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"
});

const generateCV = async (prompt,email) => {
  
  const promptString = `
  Name : ${prompt.fullName}
Email: ${prompt.email}
Phone : ${prompt.phone}
GitHub: ${prompt.github}
LinkedIn: ${prompt.linkedin}
Skills : ${prompt.skills}
Projects : ${prompt.project}
work Experience: ${prompt.workExperience}
Languages : ${prompt.languages}
Education : ${prompt.education}
Description: ${prompt.description}
`;
  try {
    const chatHistory = [
      { role: "system", content: content },
      { role: "user", content: promptString }
    ];
    const user = await get_Member(email)
    if (user.token > 0){
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: chatHistory
    });

    const text = response.choices[0].message.content;
    if (text) {
      await decrementToken(email);

    }

    return text;
  } else console.log("no enough tokens !")
  } catch (error) {
    console.error("Erreur lors de la génération du CV :", error);
    throw error;
  }
};

module.exports = { generateCV };
