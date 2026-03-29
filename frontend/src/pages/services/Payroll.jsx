import ServiceTemplate from "./ServiceTemplate";
export default function Payroll() {
  return (
    <ServiceTemplate
      title="Payroll Services"
      description="Manage employee salaries & compliance"
      points={[
        "Salary processing",
        "PF & ESI compliance",
        "Payslip generation",
        "Payroll reporting",
      ]}
    />
  );
}