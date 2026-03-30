import KnowledgeTemplate from "./KnowledgeTemplate";

const Acts = () => {
  return (
    <KnowledgeTemplate
      title="Acts"
      description="Key acts for corporate and tax compliance, updated for easy reference."
      cards={[
        {
          title: "Companies Act, 2013",
          description: "Corporate governance framework, compliance rules and penalties.",
          items: ["Board composition", "Annual returns", "Audit requirements"]
        },
        {
          title: "GST Act",
          description: "Goods & Services Tax rules, rates and input tax credit flow.",
          items: ["GST registration", "Return filing", "Refunds"]
        },
        {
          title: "Income Tax Act",
          description: "Individual and corporate taxation provisions with key sections.",
          items: ["Section 80C", "TDS/TCS", "Advance tax"]
        }
      ]}
    />
  );
};

export default Acts;
