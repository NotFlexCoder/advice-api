# 💬 Random Advice API

This lightweight Node.js (Next.js) API endpoint fetches and returns a random piece of advice using the [Advice Slip JSON API](https://api.adviceslip.com/). Perfect for integration into bots, motivational apps, widgets, or personal projects that need a touch of wisdom!

## 🚀 Features

- ⚡ Simple and fast API endpoint.
- 🔄 Fetches a random advice message on every request.
- 📦 Built using modern async/await syntax.
- 🔐 Ready to integrate with frontends, Telegram bots, or serverless functions.

## 🛠️ Requirements

- Node.js v14 or higher.
- A Next.js server or any backend supporting API routes (e.g., Vercel, Netlify functions).

## 📡 Usage

1. **Setup**:
   - Create a file under `pages/api/advice.js` in your Next.js project.
   - Paste the following code:

     ```js
     export default async function handler(req, res) {
       const response = await fetch("https://api.adviceslip.com/advice");
       const data = await response.json();
       res.status(200).json({ advice: data.slip.advice });
     }
     ```

2. **Run Your Server**:
   ```bash
   npm run dev
   ```

3. **Access the API**:
   - Visit: `http://localhost:3000/api/advice`
   - You’ll receive a response like:

   ```json
   {
     "advice": "Don't sweat the small stuff."
   }
   ```

## 📄 Example Response

```json
{
  "advice": "You can observe a lot just by watching."
}
```

## ⚠️ Error Handling

- If the external API is unavailable or returns an error, it may result in an internal server error (`500`).
- You can add a `try-catch` block to enhance error handling in production:

```js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    res.status(200).json({ advice: data.slip.advice });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch advice" });
  }
}
```

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](https://github.com/NotFlexCoder/advice-api/blob/main/LICENSE) file for details.
