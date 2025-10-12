import { Briefcase, Code, User } from "lucide-react";

export const AboutSecion = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              Graduated in Information Technology from the University of
              Transport and Communications, Ho Chi Minh City Campus. Skilled in
              modern web development and eager to contribute to real-world web
              projects.
            </p>

            <p className="text-muted-foreground">
              Completed an internship at Saigon Newport Corporation (SNP), where
              I participated in developing and maintaining internal web
              applications using React and JavaScript. Gained experience in API
              integration, responsive UI design, and Agile teamwork with
              Git/GitHub for version control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/public/CV/CV_PhamPhuTan.pdf"
                className="px-6 py-2 rounded-b-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web applications with React, JavaScript,
                    and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaboration</h4>
                  <p className="text-muted-foreground">
                    Experienced in Agile teamwork, API integration, and version
                    control with Git/GitHub.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Internship Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Saigon Newport Corporation (Mar–Jun 2025): contributed to
                    frontend features, UI optimization, and API integration.
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
