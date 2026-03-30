import KnowledgeTemplate from "./KnowledgeTemplate";

const Blogs = () => {
  return (
    <KnowledgeTemplate
      title="Blogs"
      description="In-depth insights and opinion pieces on taxation, finance, and business strategy."
      cards={[
        {
          title: "Tax Planning Strategies",
          description: "How to optimize taxes legally across individual and corporate structures.",
          items: ["Deductions", "Exemptions", "Investment planning"]
        },
        {
          title: "GST Compliance Tips",
          description: "Practical advice for mistake-free GST filing and audit readiness.",
          items: ["Input credit reconciliation", "E-way bill rules", "Refund process"]
        },
        {
          title: "Business Growth",
          description: "Actionable finance tips to scale operations and improve cash flows.",
          items: ["Working capital", "Cost management", "Risk mitigation"]
        }
      ]}
    />
  );
};

export default Blogs;
