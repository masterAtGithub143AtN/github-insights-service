import { Container } from "../ui/Container";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </Container>
  );
}