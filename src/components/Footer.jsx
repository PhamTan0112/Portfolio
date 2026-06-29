import { ArrowUp, Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LEFT: COPYRIGHT & NAME */}
        <div className="text-center md:text-left space-y-2">
          <h4 className="font-semibold text-lg text-foreground">Pham Phu Tan</h4>
          <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-2">
            <MapPin size={14} /> Ho Chi Minh City, Vietnam
          </p>
          <p className="text-xs text-muted-foreground pt-1">
            &copy; {new Date().getFullYear()} Pham Phu Tan. All rights reserved.
          </p>
        </div>

        {/* CENTER: CONTACT QUICK LINKS */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-muted-foreground my-4 md:my-0">
          <a 
            href="mailto:phamphutanxo@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={16} /> phamphutanxo@gmail.com
          </a>
          <a 
            href="tel:+84355333714" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone size={16} /> (+84) 355 333 714
          </a>
        </div>

        {/* RIGHT: SOCIALS & SCROLL TO TOP */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <a
              href="https://github.com/PhamTan0112"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/phamphutan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};