import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            
            <h3 className="text-2xl font-semibold">
              Fullstack Developer
            </h3>

            <p className="text-muted-foreground">
              I am a Fullstack Developer focused on building modern, high-concurrency 
              web applications. With a solid foundation in TypeScript, I specialize in 
              creating dynamic user interfaces using React and Next.js, backed by scalable 
              backend architectures with Node.js and NestJS.
            </p>

            <p className="text-muted-foreground">
              I have practical experience implementing real-time tracking systems via WebSockets, 
              optimizing data pipelines, and managing complex server states with TanStack Query. 
              From designing secure role-based access control (RBAC) to integrating IoT dashboards, 
              I enjoy solving technical challenges within Agile/Scrum team environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>

              <a
                href="/CV/CV_PhamPhuTan.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* CARD 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Fullstack Ecosystem
                  </h4>
                  <p className="text-muted-foreground">
                    Proficient in TypeScript across the entire stack. Crafting performance-optimized 
                    frontends (Next.js, Zustand, TanStack Query) and secure backends (NestJS, RESTful APIs, WebSockets).
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Security & Data Optimization
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in implementing JWT, OAuth2, and complex Role-Based Access Control (RBAC). 
                    Skilled in designing data processing pipelines and optimizing PostgreSQL/MySQL queries.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Enterprise Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Proven track record in developing internal port logistics systems at Saigon Newport Corp 
                    and high-concurrency real-time IoT access management modules at Thien Van Technologies.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
