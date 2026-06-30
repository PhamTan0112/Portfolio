import {
  Briefcase,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    period: "2025 - Present",
    position: "Full Stack Developer",
    company: "Thien Van Technologies",
description: [
  "Developed high-concurrency real-time access management modules using React, NestJS, PostgreSQL, and WebSockets for IoT monitoring.",
  "Built interactive dashboards and optimized frontend performance with TypeScript and TanStack Query, improving rendering efficiency and data synchronization.",
  "Implemented secure authentication and Role-Based Access Control (RBAC), ensuring system integrity and scalable user management.",
  "Designed optimized database queries and collaborated in Agile/Scrum teams through code reviews and technical documentation."
]
  },
  {
    period: "2024 - 2025",
    position: "Frontend Developer",
    company: "Saigon Newport Corporation",
description: [
  "Developed real-time IoT management modules with React, TypeScript, NestJS, PostgreSQL, and WebSockets.",
  "Built responsive dashboards and data visualization interfaces while optimizing rendering performance for large-scale real-time data.",
  "Improved application performance by refactoring API fetching and caching with TanStack Query and implementing RBAC authentication.",
  "Collaborated in Agile/Scrum teams, contributing to code reviews, technical documentation, and scalable system architecture."
]
  }
];

const education = [
  {
    period: "2020 - 2024",
    degree: "Bachelor of Information Technology",
    school: "Ho Chi Minh City University of Transport",
    description:
      "Focused on software engineering, web development, database systems and computer networks."
  }
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          About <span className="text-primary">Me</span>
        </h2>

        {/* <div className="grid lg:grid-cols-2 gap-16"> */}
<div className="space-y-20">
          {/* EXPERIENCE */}

          <div>

            <div className="flex items-center gap-3 mb-10">

              <div className="p-3 rounded-xl bg-primary/10">
                <Briefcase className="text-primary w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Experience
                </h3>

                <p className="text-muted-foreground text-sm">
                  Professional Journey
                </p>
              </div>

            </div>

            <div className="relative border-l border-primary/20 ml-5">

              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-10 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}

                  <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-primary ring-4 ring-primary/20" />

                  <div className="gradient-border p-6 card-hover">

                    <span className="text-sm text-primary font-medium">
                      {item.period}
                    </span>

                    <h4 className="text-xl font-semibold mt-2">
                      {item.position}
                    </h4>

                    <p className="text-muted-foreground mb-5">
                      {item.company}
                    </p>

                    <ul className="space-y-2">
                      {item.description.map((text, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary mt-[6px] w-1.5 h-1.5 rounded-full bg-primary" />
                          {text}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* EDUCATION */}

          <div>

            <div className="flex items-center gap-3 mb-10">

              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="text-primary w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Education
                </h3>

                <p className="text-muted-foreground text-sm">
                  Academic Background
                </p>
              </div>

            </div>

            <div className="relative border-l border-primary/20 ml-5">

              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-10"
                >
                  <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-primary ring-4 ring-primary/20" />

                  <div className="gradient-border p-6 card-hover">

                    <span className="text-sm text-primary font-medium">
                      {item.period}
                    </span>

                    <h4 className="text-xl font-semibold mt-2">
                      {item.degree}
                    </h4>

                    <p className="text-muted-foreground">
                      {item.school}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4 leading-7">
                      {item.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};