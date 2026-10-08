import { chapter1 } from './data/taxonomy'
import demoQuestions from './data/questions.demo.json'
import type { Question, ScopeStatus } from './types'

const questions = demoQuestions as Question[]

const label: Record<ScopeStatus, string> = {
  in_scope: 'In scope',
  beyond_scope: 'Beyond scope',
  verify: 'To verify',
}

export default function App() {
  return (
    <main className="page">
      <header>
        <p className="eyebrow">Karnataka 2nd PUC · KCET · NEET · JEE</p>
        <h1>Physics Prep</h1>
        <p className="lede">
          Chapter 1: {chapter1.name}. This is the foundation step: the topic structure and demo data.
        </p>
      </header>

      <section>
        <h2>Chapter 1 topics</h2>
        {chapter1.topics.map((t) => (
          <article key={t.id} className="card">
            <h3>{t.name}</h3>
            <ul>
              {t.subtopics.map((s) => (
                <li key={s.id}>
                  <span>{s.name}</span>
                  <span className={`badge ${s.scope.KA_PUC2}`}>Board: {label[s.scope.KA_PUC2]}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h2>Sample questions</h2>
        {questions.map((q) => (
          <article key={q.id} className="card">
            {q.isDemo && <span className="badge demo">Demo question</span>}
            <p>{q.text}</p>
            <small>{q.type.replace('_', ' ')}{q.marks ? ` · ${q.marks} marks` : ''}</small>
          </article>
        ))}
      </section>
    </main>
  )
}
