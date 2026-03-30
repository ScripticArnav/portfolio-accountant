import KnowledgeTemplate from "./KnowledgeTemplate";

const Forms = () => {
  return (
    <KnowledgeTemplate
      title="Forms"
      description="Common tax and regulatory forms with quick guidance to reduce filing errors."
      cards={[
        {
          title: "Form 16/16A",
          description: "TDS certificates issued to employees and vendors.",
          items: ["Download samples", "Filing tips", "Common errors to avoid"]
        },
        {
          title: "GST Forms",
          description: "GST returns and reconciliation forms for small and large taxpayers.",
          items: ["GSTR-1", "GSTR-3B", "GSTR-9C"]
        },
        {
          title: "Company Filings",
          description: "ROC forms for annual returns and event-based updates.",
          items: ["AOC-4", "MGT-7", "ADT-1"]
        }
      ]}
    />
  );
};

export default Forms;
