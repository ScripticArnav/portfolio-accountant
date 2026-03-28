import ServiceTemplate from "./ServiceTemplate";
export default function RiskAssessment() {
  return (
    <ServiceTemplate
      title="Risk Assessment"
      description="Identify & manage business risks"
      points={[
        "Financial risk analysis",
        "Business risk evaluation",
        "Compliance risk",
        "Risk mitigation strategies",
      ]}
    />
  );
}