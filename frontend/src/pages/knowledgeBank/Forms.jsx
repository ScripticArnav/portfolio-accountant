import KnowledgeTemplate from "./KnowledgeTemplate";

const Forms = () => {
  return (
    <KnowledgeTemplate
      title="Forms"
      description="Essential forms and templates for business compliance and documentation."
      cards={[
        {
          title: "GST Forms",
          description: "Registration, filing, and amendment forms for GST compliance.",
          items: ["GST REG-01", "GSTR-1/3B", "GST ITC-01"]
        },
        {
          title: "Company Forms",
          description: "MCA forms for incorporation, changes, and annual filings.",
          items: ["INC-32", "DIR-12", "MGT-7"]
        },
        {
          title: "Tax Forms",
          description: "Income tax and TDS forms for individual and business returns.",
          items: ["ITR-1 to ITR-7", "Form 16/16A", "Form 26AS"]
        },
        {
          title: "License Forms",
          description: "Application forms for various business licenses and registrations.",
          items: ["IEC Application", "FSSAI Form", "MSME Registration"]
        },
        {
          title: "Trademark Forms",
          description: "IP registration and protection forms for brands and logos.",
          items: ["TM-A", "TM-1", "TM-60"]
        },
        {
          title: "Property Forms",
          description: "Documentation forms for property registration and transfers.",
          items: ["Sale Deed", "Lease Agreement", "Power of Attorney"]
        }
      ]}
    />
  );
};

export default Forms;