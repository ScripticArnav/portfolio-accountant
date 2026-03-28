import ServiceTemplate from "./ServiceTemplate";
export default function Advisory() {
  return (
    <ServiceTemplate
      title="Advisory Services"
      description="Expert business consultation"
      points={[
        "Business growth strategy",
        "Financial advisory",
        "Startup consulting",
        "Market analysis",
      ]}
    />
  );
}