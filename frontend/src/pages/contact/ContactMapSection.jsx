const ContactMapSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 text-lg">
            Visit our office location
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* 🗺️ FREE GOOGLE MAP (No API) */}
          <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=LIG+1223+Kanpur+UP+208017&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* 📄 Address + Info */}
          <div className="text-white space-y-6">

            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20">
              <h3 className="text-2xl font-semibold mb-3">
                📍 Office Address
              </h3>
              <p className="text-gray-300 leading-relaxed">
                LIG 1223 <br />
                Kanpur, Uttar Pradesh 208017 <br />
                India
              </p>
            </div>

            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20">
              <h3 className="text-2xl font-semibold mb-3">
                🕒 Working Hours
              </h3>
              <p className="text-gray-300">
                Monday - Friday: 9AM - 7PM <br />
                Saturday: 10AM - 5PM <br />
                Sunday: Closed
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
