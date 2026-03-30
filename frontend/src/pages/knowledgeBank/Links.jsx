import KnowledgeTemplate from "./KnowledgeTemplate";

const Links = () => {
  return (
    <KnowledgeTemplate
      title="Important Links"
      description="Direct access to essential portals and notifications for financial professionals."
      cards={[
        {
          title: "Income Tax e-Filing",
          description: "Central hub for returns, TDS credentials, and notices.",
          items: ["https://www.incometax.gov.in/", "Quick login", "My Account section"]
        },
        {
          title: "GST Portal",
          description: "GST returns, challans, and registration services.",
          items: ["https://www.gst.gov.in/", "Dashboard reports", "Payment history"]
        },
        {
          title: "RBI & MCA",
          description: "Regulatory circulars and compliance updates from RBI/MCA.",
          items: ["https://www.rbi.org.in/", "https://www.mca.gov.in/"]
        }
      ]}
    />
  );
};

export default Links;
