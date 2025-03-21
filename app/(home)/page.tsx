import Container from "@/components/general/Container";
import HeroSection from "@/components/home-page/HeroSection";
import SubscriptionSection from "@/components/home-page/SubscriptionSection";

export default function Home() {
  return (
    <main>
      <Container>
        <HeroSection/>
        <SubscriptionSection/>
      </Container>
    </main>
  );
}
