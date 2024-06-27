// Generate blog posts based on template
// var backoff = require('backoff');

// var fibonacciBackoff = backoff.fibonacci({
//     randomisationFactor: 0,
//     initialDelay: 10,
//     maxDelay: 300
// });

// fibonacciBackoff.failAfter(10);
const OpenAI = require("openai");
const { patterns } = require("../src/constants/patterns");
const fs = require("fs");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

async function main() {
  let promptTemplate = fs.readFileSync("./scripts/template.md");
  for (let i = 0; i < 1; i++) {
    if (patterns[i].name.includes("Open E")) {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: promptTemplate + JSON.stringify(patterns[i]),
          },
        ],
        model: "gpt-4o",
      });

      console.log(chatCompletion.choices[0].message.content);

      let result = chatCompletion.choices[0].message.content
        ? chatCompletion.choices[0].message.content
        : "";
      fs.writeFileSync(
        "./posts/" + patterns[i].name.replace(/ +/g, "-").toLowerCase() + ".md",
        result,
      );
      delay(250);
    }
  }
}

main();
