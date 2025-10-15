import { Plus } from "lucide-react";
import { Button } from "./ui/button";

const PlantTreeButton = () => {
  return (
    <Button
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-glow hover:scale-110 transition-spring z-40"
      size="icon"
      aria-label="Plant a tree"
    >
      <Plus className="w-6 h-6" />
    </Button>
  );
};

export default PlantTreeButton;
