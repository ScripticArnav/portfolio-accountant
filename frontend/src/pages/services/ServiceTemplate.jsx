const ServiceTemplate = ({ title, description, points }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-gray-600 text-sm text-center mb-4">{description}</p>

        <div className="mt-4 space-y-2">
          {points.map((p, i) => (
            <p key={i}>• {p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;