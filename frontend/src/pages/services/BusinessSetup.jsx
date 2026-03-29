import ServiceTemplate from "./ServiceTemplate";
export default function BusinessSetup() {
  return (
    <ServiceTemplate
      title="Business Setup"
      description="Start your business smoothly"
      points={[
        "Company registration",
        "Startup advisory",
        "Trademark registration",
        "Business licensing",
      ]}
    />
  );
}