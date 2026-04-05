const KnowledgeTemplate = ({ title, description, cards }) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            {/* Knowledge Bank */}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4">{title}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 opacity-20" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.description}</p>
                {card.items && (
                  <ul className="text-sm list-disc pl-5 space-y-2 text-gray-600">
                    {card.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {card.cta && (
                  <a
                    href={card.cta.url}
                    className="inline-flex items-center mt-5 px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors"
                  >
                    {card.cta.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeTemplate;
