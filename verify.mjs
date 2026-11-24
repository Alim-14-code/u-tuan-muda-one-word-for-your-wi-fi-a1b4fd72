import { readFileSync } from "node:fs";

// Verify the entry: exactly the approved single word, 1–20 chars,
// no spaces, no punctuation, no extra words.
const EXPECTED = "Gaslighting";

const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trimEnd();
if (text.length < 1 || text.length > 20) throw new Error("length out of gate (1–20): " + text.length);
if (/\s/.test(text)) throw new Error("entry contains whitespace: " + JSON.stringify(text));
if (text !== EXPECTED) throw new Error("entry.txt does not match the approved word");
console.log("entry OK: one word, " + text.length + " chars: " + text);
