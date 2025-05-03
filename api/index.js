export default async function handler(req, res) {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  res.status(200).json({ advice: data.slip.advice });
}