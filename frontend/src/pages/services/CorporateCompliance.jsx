import ServiceTemplate from "./ServiceTemplate";
export default function CorporateCompliance() {
  return (
    <ServiceTemplate
      title="Corporate Compliance"
      description="Stay compliant with company laws"
      points={[
        "ROC filings",
        "Annual compliance",
        "Company law advisory",
        "Legal documentation",
      ]}
    />
  );
}