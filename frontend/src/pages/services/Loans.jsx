import ServiceTemplate from "./ServiceTemplate";
export default function Loans() {
  return (
    <ServiceTemplate
      title="Loan Services"
      description="Easy loan assistance & guidance"
      points={[
        "Personal loans",
        "Business loans",
        "Loan documentation",
        "Eligibility guidance",
      ]}
    />
  );
}