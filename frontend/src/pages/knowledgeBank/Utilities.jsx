import KnowledgeTemplate from "./KnowledgeTemplate";

const Utilities = () => {
  return (
    <KnowledgeTemplate
      title="Utilities"
      description="Handy tools and checklists to accelerate compliance workflows."
      cards={[
        {
          title: "Tax Due-Date Calendar",
          description: "Stay ahead with an organized calendar for all tax deadlines.",
          items: ["GST returns", "TDS payments", "Income Tax filings"]
        },
        {
          title: "Compliance Checklist",
          description: "Step-by-step checklist for monthly/quarterly/annual filings.",
          items: ["Company Compliance", "GST Returns", "Audit preparation"]
        },
        {
          title: "Document Templates",
          description: "Standardized templates for audits, filings, and agreements.",
          items: ["Power of Attorney", "Engagement Letter", "Service Agreements"]
        }
      ]}
    />
  );
};

export default Utilities;
