import KnowledgeTemplate from "./KnowledgeTemplate";

const Bulletins = () => {
  return (
    <KnowledgeTemplate
      title="Bulletins"
      description="Latest regulatory bulletins, circulars, and official announcements."
      cards={[
        {
          title: "GST Circulars",
          description: "Timely circulars with implementation guidance.",
          items: ["Rate changes", "Compliance clarifications", "Return timelines"]
        },
        {
          title: "CBDT Notifications",
          description: "Income tax notices and procedural updates.",
          items: ["Section updates", "Due date extensions", "Penalty relaxations"]
        },
        {
          title: "RBI Advisories",
          description: "Banking and payment compliance bulletins.",
          items: ["Payment systems", "Reserve requirements", "Data security"]
        }
      ]}
    />
  );
};

export default Bulletins;
