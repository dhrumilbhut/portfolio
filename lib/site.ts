export const site = {
  name: "Dhrumil Bhut",
  title: "Dhrumil Bhut | Software Engineer",
  url: "https://dhrumilbhut.com",
  description:
    "Dhrumil Bhut — Software Engineer specialising in backend systems, distributed infrastructure, and API development. Node.js, PostgreSQL, AWS, Redis, RabbitMQ.",
  ogDescription:
    "Software Engineer with 2.5+ years building scalable backend systems. Node.js, PostgreSQL, AWS, distributed systems, and Applied AI.",
  jobTitle: "Software Engineer",
  email: "dhrumilbhut@gmail.com",
  github: "https://github.com/dhrumilbhut",
  linkedin: "https://linkedin.com/in/dhrumilbhut",
};

export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
