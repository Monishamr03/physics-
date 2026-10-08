import type { Topic, Subtopic, ScopeStatus } from '../types'

// Every Karnataka (KA_PUC2) and KCET status is 'verify' until it is checked
// against the official DPUE syllabus PDF. Do not change these from memory.
const sub = (
  id: string,
  name: string,
  ka: ScopeStatus = 'verify',
  kcet: ScopeStatus = 'verify',
  neet: ScopeStatus = 'in_scope',
  jm: ScopeStatus = 'in_scope',
  ja: ScopeStatus = 'in_scope',
): Subtopic => ({
  id,
  name,
  scope: { KA_PUC2: ka, KCET: kcet, NEET: neet, JEE_MAIN: jm, JEE_ADV: ja },
})

export const chapter1: { id: string; name: string; topics: Topic[] } = {
  id: 'ch1',
  name: 'Electric Charges and Fields',
  topics: [
    {
      id: 't1',
      name: 'Electric charge',
      subtopics: [
        sub('t1.props', 'Properties of charge'),
        sub('t1.cond', 'Conductors and insulators'),
        sub('t1.induction', 'Charging by induction'),
      ],
    },
    {
      id: 't2',
      name: "Coulomb's law",
      subtopics: [
        sub('t2.law', 'Force between point charges'),
        sub('t2.multi', 'Multiple charges and superposition'),
      ],
    },
    {
      id: 't3',
      name: 'Electric field',
      subtopics: [
        sub('t3.point', 'Field of a point charge'),
        sub('t3.cont', 'Continuous charge distributions'),
        sub('t3.lines', 'Field lines'),
      ],
    },
    {
      id: 't4',
      name: 'Electric dipole',
      subtopics: [
        sub('t4.field', 'Field on axis and equator'),
        sub('t4.torque', 'Torque in a uniform field'),
      ],
    },
    {
      id: 't5',
      name: "Flux and Gauss's law",
      subtopics: [
        sub('t5.flux', 'Electric flux'),
        sub('t5.gauss', "Gauss's law and applications"),
      ],
    },
    {
      id: 't6',
      name: 'Beyond-board extensions',
      subtopics: [
        sub('t6.ring', 'Field of ring or disc', 'beyond_scope', 'beyond_scope', 'in_scope', 'in_scope', 'in_scope'),
      ],
    },
  ],
}
