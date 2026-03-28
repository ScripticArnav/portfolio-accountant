import ServiceTemplate from "./ServiceTemplate";
export default function Finance() {
  return (
    <ServiceTemplate
      title="Finance Services"
      description="Smart financial planning & advisory"
      points={[
        "Financial planning",
        "Investment advisory",
        "Budget management",
        "Business financial consulting",
      ]}
    />
  );
}