export type SyllabusId = 'KA_PUC2' | 'KCET' | 'NEET' | 'JEE_MAIN' | 'JEE_ADV'
export type ScopeStatus = 'in_scope' | 'beyond_scope' | 'verify'
export type QuestionType =
  | 'mcq' | 'numerical' | 'conceptual' | 'derivation' | 'short_answer'
  | 'long_answer' | 'assertion_reason' | 'multi_correct' | 'integer'

export interface Subtopic {
  id: string
  name: string
  scope: Record<SyllabusId, ScopeStatus>
}

export interface Topic {
  id: string
  name: string
  subtopics: Subtopic[]
}

export interface Question {
  id: string
  text: string
  topicId: string
  subtopicId: string
  type: QuestionType
  marks: number | null // Board only
  exams: SyllabusId[]
  source: {
    name: string
    kind: 'textbook' | 'pyq' | 'original'
    reference?: string
    license: 'permitted' | 'demo' | 'unknown'
  }
  isDemo: boolean
  // Deliberately NO answer, solution or correct-option fields.
}
