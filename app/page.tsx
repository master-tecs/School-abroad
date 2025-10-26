import FooterSection from "@/components/homepage/footer";
import HeroSection from "@/components/homepage/hero-section";
import Integrations from "@/components/homepage/integrations";
import { getSubscriptionDetails } from "@/lib/subscription";
import PricingTable from "./pricing/_component/pricing-table";
import Hero from "@/components/homepage/Hero/hero";

export default async function Home() {
  const subscriptionDetails = await getSubscriptionDetails();

  return (
    <>
      <Hero />
      <HeroSection />
      <Integrations />
      <PricingTable subscriptionDetails={subscriptionDetails} />
      <FooterSection />
    </>
  );
}
