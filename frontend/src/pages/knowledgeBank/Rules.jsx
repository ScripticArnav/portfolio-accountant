import KnowledgeTemplate from "./KnowledgeTemplate";

const Rules = () => {
  return (
    <KnowledgeTemplate
      title="Rules"
      description="Practical rule summaries for seamless compliance in all advisory areas."
      cards={[
        {
          title: "GST Rule Updates",
          description: "Latest procedural rules for registration, invoicing, and returns.",
          items: ["E-invoicing", "Reverse charge", "Composition scheme"]
        },
        {
          title: "TDS/TCS Provisions",
          description: "Withholding tax responsibilities and due dates for all categories.",
          items: ["Deduction timelines", "Form 26Q/27Q", "Penalty guidelines"]
        },
        {
          title: "ROC Compliance",
          description: "Annual filing and secretarial requirements for companies and LLPs.",
          items: ["MGT-7", "ADT-1", "AOC-4"]
        }
      ]}
    />
  );
};

export default Rules;
