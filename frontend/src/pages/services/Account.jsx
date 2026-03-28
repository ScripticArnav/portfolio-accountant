import ServiceTemplate from "./ServiceTemplate";
export default function Account() {
  return (
    <ServiceTemplate
      title="Accounting Services"
      description="Complete accounting solutions for businesses"
      points={[
        "Bookkeeping & ledger management",
        "Financial statement preparation",
        "Cash flow tracking",
        "Accounting software support",
      ]}
    />
  );
}