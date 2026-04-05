import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HRACalculator = () => {
  const [hraBasic, setHraBasic] = useState('');
  const [hraHra, setHraHra] = useState('');
  const [hraRent, setHraRent] = useState('');
  const [hraLocation, setHraLocation] = useState('metro');

  const calculateHRA = () => {
    const basic = Number(hraBasic);
    const hra = Number(hraHra);
    const rent = Number(hraRent);

    if (!basic || !hra || !rent) return { exemption: 0, taxable: 0 };

    const actualHra = Math.min(hra, rent);
    const limit = hraLocation === 'metro' ? basic * 0.5 : basic * 0.4;
    const exemption = Math.min(actualHra, limit);
    const taxable = hra - exemption;

    return { exemption, taxable };
  };

  const result = calculateHRA();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">HRA Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Basic Salary (₹)</label>
                <input
                  type="number"
                  placeholder="Enter basic salary"
                  value={hraBasic}
                  onChange={(e) => setHraBasic(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">HRA Received (₹)</label>
                <input
                  type="number"
                  placeholder="Enter HRA received"
                  value={hraHra}
                  onChange={(e) => setHraHra(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rent Paid (₹)</label>
                <input
                  type="number"
                  placeholder="Enter rent paid"
                  value={hraRent}
                  onChange={(e) => setHraRent(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City Type</label>
                <select
                  value={hraLocation}
                  onChange={(e) => setHraLocation(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="metro">Metro City (Delhi, Mumbai, Chennai, Kolkata)</option>
                  <option value="non-metro">Non-Metro City</option>
                </select>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">HRA Exemption</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">HRA Received:</span>
                  <span className="font-semibold">₹{Number(hraHra).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Exempt Amount:</span>
                  <span className="font-semibold">₹{result.exemption.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-gray-900 font-medium">Taxable HRA:</span>
                  <span className="font-bold text-lg">₹{result.taxable.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRACalculator;