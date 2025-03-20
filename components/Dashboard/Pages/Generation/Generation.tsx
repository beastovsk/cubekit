import { Button } from "@/components/ui/button";
import { GenerationDialog, LetterItem } from "../../Content";
const letters = [
  {
    business: "Tech Solutions",
    offer: "We provide AI-driven analytics tools.",
    email: "contact@techsolutions.com",
    socialNetwork: "LinkedIn",
    socialLink: "https://linkedin.com/in/techsolutions",
    generatedLetter:
      "Hello, I noticed your interest in data analytics. Our AI-driven tools can help streamline your insights. Let's connect!",
  },
  {
    business: "Marketing Pro",
    offer: "Boost your brand with our marketing strategies.",
    email: "info@marketingpro.com",
    socialNetwork: "Facebook",
    socialLink: "https://facebook.com/marketingpro",
    generatedLetter:
      "Hey, I saw your recent posts about brand growth. We specialize in strategies that enhance engagement. Would love to discuss more!",
  },
];

export const Generation = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2>General</h2>
        <GenerationDialog />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {letters.map((letter, index) => (
          <LetterItem key={index} letter={letter} />
        ))}
      </div>
    </div>
  );
};
