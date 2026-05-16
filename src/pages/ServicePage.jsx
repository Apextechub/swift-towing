import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ServiceHeader from "../Components/ServiceHeader";
import ValueGrid from "../Components/ValueGrid";
import QuoteSection from "../Components/QuoteSection";
import Testimonials from "../Components/Testimonials";
import CallCTA from "../Components/CallCTA";
import { getServiceBySlug, BUSINESS } from "../config";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.headline} | ${BUSINESS.name}`;
    }
  }, [service]);

  // Unknown slug → send back to the homepage.
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ServiceHeader
        eyebrow={`${service.label} • Available 24/7`}
        headline={service.headline}
        intro={service.intro}
      />
      <ValueGrid
        eyebrow="Why Choose Us"
        title={`Why Our ${service.label} Stands Out`}
        subtitle="Same trusted crew, the right equipment, and honest pricing — every call."
        items={service.benefits}
      />
      <QuoteSection defaultService={service.label} />
      <Testimonials />
      <CallCTA />
    </>
  );
}
