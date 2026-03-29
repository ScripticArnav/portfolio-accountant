import ServiceTemplate from "./ServiceTemplate";
export default function Taxation() {
  return (
    <ServiceTemplate
      title="Taxation Services"
      description="Complete tax filing & compliance"
      points={[
        "Income tax return filing",
        "GST registration & filing",
        "Tax planning",
        "Handling tax notices",
      ]}
    />
  );
}