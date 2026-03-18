import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ChartBarIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  BellIcon,
  CreditCardIcon,
  LogoutIcon
} from '@heroicons/react/24/outline';

const ClientPortal = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (!token || !storedUser) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        setLoading(true);
        const userData = JSON.parse(storedUser);
        setUser(userData);

        // Mock dashboard data (replace with real API calls)
        setStats({
          totalInvoices: 247,
          pendingPayments: 3,
          complianceScore: 98,
          savingsThisYear: 245000
        });

        setRecentActivities([
          {
            id: 1,
            title: 'GST Return Filed',
            type: 'success',
            date: '2 hours ago',
            icon: CurrencyDollarIcon
          },
          {
            id: 2,
            title: 'Q3 Financial Report Ready',
            type: 'info',
            date: '1 day ago',
            icon: ChartBarIcon
          },
          {
            id: 3,
            title: 'TDS Payment Due Tomorrow',
            type: 'warning',
            date: 'Just now',
            icon: ShieldCheckIcon
          },
          {
            id: 4,
            title: 'New Team Member Added',
            type: 'success',
            date: '3 days ago',
            icon: UserGroupIcon
          }
        ]);
      } catch (error) {
        console.error('Error loading dashboard:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-12 shadow-2xl"></div>
          <p className="text-3xl font-bold text-gray-900">Loading Dashboard...</p>
          <p className="text-xl text-gray-600 mt-4">Welcome back to your financial portal</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-emerald-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo & Welcome */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">F</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Client Portal</h1>
                <p className="text-xl text-emerald-600 font-semibold">
                  Welcome back, <span className="capitalize">{user.name}</span>!
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-4 bg-emerald-50 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group">
                <BellIcon className="w-8 h-8 text-emerald-600 group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs font-bold flex items-center justify-center animate-pulse">
                  3
                </span>
              </button>

              {/* Quick Actions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setQuickActionsOpen(!quickActionsOpen)}
                  className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Quick Actions
                </button>
                
                {quickActionsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-3xl shadow-2xl border border-gray-200 py-4 z-50 animate-slideDown">
                    <Link to="/invoices" className="flex items-center space-x-4 px-6 py-5 hover:bg-emerald-50 rounded-2xl mx-2 transition-all duration-300 group">
                      <CreditCardIcon className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-bold text-lg text-gray-900 group-hover:text-emerald-600">Manage Invoices</div>
                        <div className="text-sm text-gray-600">View, download, payments</div>
                      </div>
                    </Link>
                    <Link to="/compliance" className="flex items-center space-x-4 px-6 py-5 hover:bg-emerald-50 rounded-2xl mx-2 transition-all duration-300 group">
                      <ShieldCheckIcon className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-bold text-lg text-gray-900 group-hover:text-emerald-600">Compliance Dashboard</div>
                        <div className="text-sm text-gray-600">GST, TDS, ROC status</div>
                      </div>
                    </Link>
                    <Link to="/reports" className="flex items-center space-x-4 px-6 py-5 hover:bg-emerald-50 rounded-2xl mx-2 transition-all duration-300 group">
                      <ChartBarIcon className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-bold text-lg text-gray-900 group-hover:text-emerald-600">Financial Reports</div>
                        <div className="text-sm text-gray-600">P&L, Balance Sheet, Cashflow</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Profile & Logout */}
              <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
                </div>
                <div className="hidden md:block">
                  <div className="font-bold text-lg text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-600">{user.role === 'admin' ? 'Admin' : 'Premium Client'}</div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="p-4 bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
                title="Logout"
              >
                <LogoutIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-3 space-y-8">
            {/* KPI Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-emerald-200 hover:border-emerald-400 cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                    <ChartBarIcon className="w-9 h-9 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600">{stats.complianceScore}%</div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Compliance Score</h4>
                <p className="text-xl text-gray-600">All filings up to date</p>
              </div>

              <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-blue-200 hover:border-blue-400 cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                    <DocumentTextIcon className="w-9 h-9 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600">{stats.totalInvoices}</div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Total Invoices</h4>
                <p className="text-xl text-gray-600">This financial year</p>
              </div>

              <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-orange-200 hover:border-orange-400 cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                    <CurrencyDollarIcon className="w-9 h-9 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600">{formatCurrency(stats.savingsThisYear)}</div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Savings YTD</h4>
                <p className="text-xl text-gray-600">Tax optimization achieved</p>
              </div>

              <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-purple-200 hover:border-purple-400 cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                    <ClockIcon className="w-9 h-9 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600">{stats.pendingPayments}</div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Pending Payments</h4>
                <p className="text-xl text-gray-600">Invoices due this week</p>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
              <h3 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
                <ArrowTrendingUpIcon className="w-12 h-12 mr-4 text-emerald-600" />
                Recent Activity
              </h3>
              <div className="space-y-6">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-6 p-6 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-3xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-l-4 border-emerald-400">
                    <div className={`w-3 h-3 rounded-full mt-3 flex-shrink-0 ${activity.type === 'success' ? 'bg-emerald-500' : activity.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-4 mb-2">
                        <activity.icon className={`w-10 h-10 p-2 rounded-2xl ${activity.type === 'success' ? 'bg-emerald-100 text-emerald-600' : activity.type === 'warning' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`} />
                        <h4 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors flex-1 truncate">
                          {activity.title}
                        </h4>
                        <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                          {activity.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            {/* Navigation Cards */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-emerald-200 mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Navigation</h3>
              <div className="space-y-4">
                <Link to="/invoices" className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-emerald-200 hover:border-emerald-400">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                    <CreditCardIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900 group-hover:text-emerald-600">Invoices</div>
                    <div className="text-sm text-gray-600">View & Pay</div>
                  </div>
                </Link>

                <Link to="/compliance" className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-blue-200 hover:border-blue-400">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900 group-hover:text-blue-600">Compliance</div>
                    <div className="text-sm text-gray-600">GST, TDS, ROC</div>
                  </div>
                </Link>

                <Link to="/reports" className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-purple-200 hover:border-purple-400">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                    <ChartBarIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900 group-hover:text-purple-600">Reports</div>
                    <div className="text-sm text-gray-600">Financial Statements</div>
                  </div>
                </Link>

                <Link to="/team" className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-orange-200 hover:border-orange-400">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900 group-hover:text-orange-600">Your Team</div>
                    <div className="text-sm text-gray-600">Account Manager</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Account Info */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-8 border border-emerald-200">
              <h4 className="text-2xl font-bold text-emerald-900 mb-6 text-center">Account Status</h4>
              <div className="space-y-4 text-center">
                <div className="text-4xl font-bold text-emerald-600">{user.plan || 'Premium'}</div>
                <div className="text-lg text-emerald-800">Active until {user.expiry || 'Dec 2025'}</div>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span>Support Level: Priority</span>
                  <span>•</span>
                  <span>Next Billing: {formatCurrency(user.nextBilling || 25000)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;