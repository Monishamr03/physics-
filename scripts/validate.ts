import { readFileSync } from 'node:fs'
import { chapter1 } from '../src/data/taxonomy'

// Stops bad data from ever being deployed: runs in CI before the build.
const questions = JSON.parse(readFileSync('src/data/questions.demo.json', 'utf8'))
const subIds = new Set(chapter1.topics.flatMap((t) => t.subtopics.map((s) => s.id)))
const topicIds = new Set(chapter1.topics.map((t) => t.id))
const banned = ['answer', 'solution', 'correctOption']
let errors = 0

for (const q of questions) {
  if (!topicIds.has(q.topicId)) { console.error(`${q.id}: unknown topic ${q.topicId}`); errors++ }
  if (!subIds.has(q.subtopicId)) { console.error(`${q.id}: unknown subtopic ${q.subtopicId}`); errors++ }
  for (const k of banned) {
    if (k in q) { console.error(`${q.id}: forbidden field "${k}"`); errors++ }
  }
  if (!q.source?.license) { console.error(`${q.id}: missing license`); errors++ }
}

if (errors) process.exit(1)
console.log(`OK: ${questions.length} questions valid`)
