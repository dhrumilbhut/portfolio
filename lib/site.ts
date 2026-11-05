export const site = {
  name: "Dhrumil Bhut",
  title: "Dhrumil Bhut | Backend & AI Systems Engineer",
  headline: "Backend & AI Systems Engineer | Distributed Systems & AI Infrastructure",
  url: "https://dhrumilbhut.com",
  jobTitle: "Backend & AI Systems Engineer",
  email: "dhrumilbhut@gmail.com",
  github: "https://github.com/dhrumilbhut",
  linkedin: "https://linkedin.com/in/dhrumilbhut",
  // First day in production (ZURU, 08/2023). Drives the years-of-experience stat.
  careerStart: "2023-08-01",
};

// Whole months since careerStart, rounded down to the nearest half year:
// 3.0 -> 3, 3.4 -> 3, 3.5 -> 3.5, 4.1 -> 4.
export function yearsOfExperience(now: Date = new Date()): number {
  const start = new Date(`${site.careerStart}T00:00:00Z`);
  const months =
    (now.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (now.getUTCMonth() - start.getUTCMonth()) -
    (now.getUTCDate() < start.getUTCDate() ? 1 : 0);
  return Math.max(0, Math.floor((months / 12) * 2) / 2);
}

// 3 -> "3+", 3.5 -> "3.5+"
export function formatYears(years: number): string {
  return `${years}+`;
}

// Short summary used for social previews; the full summary adds the stack line.
export function siteOgDescription(now: Date = new Date()): string {
  return `Backend and AI Engineer with ${formatYears(yearsOfExperience(now))} years in production. Builds distributed systems and LLM infrastructure that stay correct when things fail.`;
}

export function siteDescription(now: Date = new Date()): string {
  return `${siteOgDescription(now)} Stack: Node.js, TypeScript, Python. AI infra: RAG pipelines, LLM evaluation.`;
}

export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
