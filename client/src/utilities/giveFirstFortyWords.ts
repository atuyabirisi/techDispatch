export default function (content: string) {
  if (!content) return "";

  const words = content.trim().split(/\s+/); // split by any whitespace
  const first40 = words.slice(0, 50).join(" ");

  return first40;
}
