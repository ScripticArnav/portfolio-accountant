import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GratuityCalculator = () => {
  const [gratuitySalary, setGratuitySalary] = useState('');
  const [gratuityYears, setGratuityYears] = useState('');

  const calculateGratuity = () => {
    const salary = Number(gratuitySalary);
    const years = Number(gratuityYears);

    if (!salary || !years) return 0;

    const gratuity = (salary * 15 * years) / 26;
    return gratuity;
  };

  const result = calculateGratuity();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gratuity Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Drawn Salary (₹)</label>
                <input
                  type="number"
                  placeholder="Enter last drawn salary"
                  value={gratuitySalary}
                  onChange={(e) => setGratuitySalary(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Service</label>
                <input
                  type="number"
                  placeholder="Enter years of service"
                  value={gratuityYears}
                  onChange={(e) => setGratuityYears(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Gratuity Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Formula:</span>
                  <span>(Salary × 15 × Years) ÷ 26</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-semibold">
                  <span>Gratuity Amount:</span>
                  <span>₹{result.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GratuityCalculator;