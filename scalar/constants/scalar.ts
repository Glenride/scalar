export type MagnitudeId = 'ignite' | 'build' | 'peak';
export type EnvironmentId = 'bodyweight' | 'travel' | 'full-gym';

export type MagnitudeOption = {
  id: MagnitudeId;
  label: string;
  duration: string;
  intensity: string;
  summary: string;
  target: string;
  lessonIds: string[];
};

export type EnvironmentOption = {
  id: EnvironmentId;
  label: string;
  equipment: string;
  space: string;
  summary: string;
};

export type Lesson = {
  id: string;
  title: string;
  category: string;
  duration: string;
  intensity: string;
  focus: string;
  protocol: string;
  progression: string;
  environments: EnvironmentId[];
  recommendedFor: MagnitudeId[];
};

export const magnitudes: MagnitudeOption[] = [
  {
    id: 'ignite',
    label: 'Ignite',
    duration: '12 min',
    intensity: 'Low load',
    summary: 'Recovery-biased deployment for stiffness and startup energy.',
    target: 'Mobility + neural wake-up',
    lessonIds: ['thoracic-reset', 'floor-core'],
  },
  {
    id: 'build',
    label: 'Build',
    duration: '24 min',
    intensity: 'Moderate load',
    summary: 'Balanced session for strength maintenance and clean movement volume.',
    target: 'Strength + posture',
    lessonIds: ['posterior-chain', 'velocity-ladder'],
  },
  {
    id: 'peak',
    label: 'Peak',
    duration: '38 min',
    intensity: 'High load',
    summary: 'High-output deployment focused on velocity, density, and finish quality.',
    target: 'Power + conditioning',
    lessonIds: ['velocity-ladder', 'posterior-chain'],
  },
];

export const magnitudeLabels: Record<MagnitudeId, string> = {
  ignite: 'Ignite',
  build: 'Build',
  peak: 'Peak',
};

export const environments: EnvironmentOption[] = [
  {
    id: 'bodyweight',
    label: 'Bodyweight',
    equipment: 'Mat + timer',
    space: '2m x 2m',
    summary: 'Fastest setup for home or office resets.',
  },
  {
    id: 'travel',
    label: 'Travel',
    equipment: 'Band + chair',
    space: 'Hotel-room footprint',
    summary: 'Portable session architecture for constrained environments.',
  },
  {
    id: 'full-gym',
    label: 'Full Gym',
    equipment: 'Rack + cable + rower',
    space: 'Open floor',
    summary: 'Full hardware access for heavier progression blocks.',
  },
];

export const lessons: Lesson[] = [
  {
    id: 'thoracic-reset',
    title: 'Thoracic Reset',
    category: 'Mobility Protocol',
    duration: '12 min',
    intensity: 'Low',
    focus: 'Rib cage rotation, extension, and desk posture recovery.',
    protocol: 'Breathing ladder, open books, wall slides, and reach-throughs.',
    progression: '+2% thoracic mobility after 3 consecutive sessions.',
    environments: ['bodyweight', 'travel'],
    recommendedFor: ['ignite', 'build'],
  },
  {
    id: 'posterior-chain',
    title: 'Posterior Chain Reload',
    category: 'Strength Block',
    duration: '24 min',
    intensity: 'Moderate',
    focus: 'Hip hinge mechanics, glute output, and trunk stiffness.',
    protocol: 'Tempo hinges, split squats, carries, and controlled isometrics.',
    progression: '+4% velocity stability when completed twice weekly.',
    environments: ['travel', 'full-gym'],
    recommendedFor: ['build', 'peak'],
  },
  {
    id: 'velocity-ladder',
    title: 'Velocity Ladder',
    category: 'Power Session',
    duration: '38 min',
    intensity: 'High',
    focus: 'Explosive push, pull, and sprint conditioning density.',
    protocol: 'Short intervals, rower bursts, med-ball intent, and tight rest windows.',
    progression: '+3% repeat output while keeping recovery debt contained.',
    environments: ['full-gym'],
    recommendedFor: ['build', 'peak'],
  },
  {
    id: 'floor-core',
    title: 'Floor Core Calibration',
    category: 'Control Session',
    duration: '14 min',
    intensity: 'Low',
    focus: 'Breathing, trunk control, and pelvic position under fatigue.',
    protocol: 'Dead bugs, side planks, bear breathing, and slow transitions.',
    progression: '+1% control gains that stabilize later strength work.',
    environments: ['bodyweight', 'travel'],
    recommendedFor: ['ignite'],
  },
];

export const metrics = [
  {
    id: 'thoracic-mobility',
    label: 'Thoracic Mobility',
    current: '78%',
    delta: '+2%',
    note: 'Rotation range recovered from repeated reset protocols.',
  },
  {
    id: 'hinge-velocity',
    label: 'Hinge Velocity',
    current: '91%',
    delta: '+3%',
    note: 'Output is improving without pushing recovery debt too high.',
  },
  {
    id: 'rest-efficiency',
    label: 'Rest Efficiency',
    current: '84%',
    delta: '+1%',
    note: 'Intervals are compressing while form quality remains stable.',
  },
];

export const badgeTracks = [
  {
    id: 'range-engine',
    label: 'Range Engine',
    progress: 0.68,
    descriptor: 'Fill rate tied to mobility sessions completed this cycle.',
  },
  {
    id: 'velocity-stack',
    label: 'Velocity Stack',
    progress: 0.52,
    descriptor: 'Filled by repeated power sessions with stable recovery markers.',
  },
  {
    id: 'recovery-loop',
    label: 'Recovery Loop',
    progress: 0.81,
    descriptor: 'Represents how consistently the system exits training debt.',
  },
];

export const weeklyLoad = [
  { label: 'Mon', value: 44 },
  { label: 'Tue', value: 58 },
  { label: 'Wed', value: 49 },
  { label: 'Thu', value: 71 },
  { label: 'Fri', value: 66 },
  { label: 'Sat', value: 82 },
  { label: 'Sun', value: 54 },
];

export const changelog = {
  version: '1.2.4',
  title: 'Body Version 1.2.4 Deployed.',
  entries: [
    '+2% Thoracic Mobility detected.',
    '0.4kg CO2 offset added to ledger.',
    'Grocery list updated with +200g complex carbs for recovery.',
  ],
};

export function buildDeploymentPlan(magnitudeId: MagnitudeId, environmentId: EnvironmentId) {
  const magnitude = magnitudes.find((option) => option.id === magnitudeId) ?? magnitudes[0];
  const environment = environments.find((option) => option.id === environmentId) ?? environments[0];

  const recommendedLesson =
    lessons.find(
      (lesson) =>
        lesson.recommendedFor.includes(magnitude.id) && lesson.environments.includes(environment.id)
    ) ??
    lessons.find((lesson) => lesson.recommendedFor.includes(magnitude.id)) ??
    lessons[0];

  return {
    magnitude,
    environment,
    recommendedLesson,
    checklist: [
      `Load ${magnitude.duration} at ${magnitude.intensity.toLowerCase()}.`,
      `Prepare ${environment.equipment.toLowerCase()} inside a ${environment.space.toLowerCase()}.`,
      `Execute ${recommendedLesson.title} and target ${magnitude.target.toLowerCase()}.`,
    ],
  };
}
