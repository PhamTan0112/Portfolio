import { Navbar } from "../src/conponents/Navbar";
import { StarBackground } from "../src/conponents/StarBackground";
import { ThemeToggle } from "../src/conponents/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle></ThemeToggle>
      {/* Background Effects  */}
      <StarBackground></StarBackground>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Main content */}

      {/* Footer */}
    </div>
  );
};
