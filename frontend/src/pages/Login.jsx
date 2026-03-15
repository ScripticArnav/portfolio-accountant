import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { EyeIcon, EyeSlashIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      setIsAuthenticated(true);
      navigate('/client-portal');
    }
  }, [navigate, setIsAuthenticated]);

  const validateForm = () => {
    const newErrors = {};

    if (!credentials.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!credentials.password) {
      newErrors.password = 'Password is required';
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error on input
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setLoginStatus(null);
    setErrors({});

    try {
      const response = await axios.post('/api/auth/login', credentials, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Store token and user data
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      setIsAuthenticated(true);
      
      // Redirect based on role
      const user = response.data.user;
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/client-portal');
      }
      
    } catch (error) {
      if (error.response?.status === 401) {
        setLoginStatus('invalid');
      } else {
        setLoginStatus('error');
      }
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* Header */}
          <div className="mx-auto h-24 w-24 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl flex items-center justify-center shadow-2xl mb-8">
            <LockClosedIcon className="h-14 w-14 text-white" />
          </div>
          <h2 className="mt-6 text-center text-4xl md:text-5xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-xl text-gray-600 max-w-sm mx-auto">
            Sign in to your client portal to access your financial dashboard
          </p>
        </div>

        {/* Login Status Messages */}
        {loginStatus === 'invalid' && (
          <div className="p-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-3xl shadow-xl border border-red-400 animate-pulse">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h4 className="font-bold text-lg">Invalid Credentials</h4>
                <p>Email or password is incorrect</p>
              </div>
            </div>
          </div>
        )}

        {loginStatus === 'error' && (
          <div className="p-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-3xl shadow-xl animate-pulse">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-bold text-lg">Connection Error</h4>
                <p>Please check your internet and try again</p>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="space-y-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-900">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-7 w-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={credentials.email}
                onChange={handleInputChange}
                className={`w-full pl-14 pr-4 py-6 border-2 rounded-3xl text-xl placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-300 shadow-xl ${
                  errors.email
                    ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-200'
                    : 'border-gray-200 hover:border-primary-300 focus:border-primary-500'
                }`}
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="flex items-center space-x-2 text-red-600 text-sm font-medium ml-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-4">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-900">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <LockClosedIcon className="h-7 w-7 text-gray-500" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={credentials.password}
                onChange={handleInputChange}
                className={`w-full pl-14 pr-14 py-6 border-2 rounded-3xl text-xl placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-300 shadow-xl ${
                  errors.password
                    ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-200'
                    : 'border-gray-200 hover:border-primary-300 focus:border-primary-500'
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-7 w-7 text-gray-500 hover:text-gray-700" />
                ) : (
                  <EyeIcon className="h-7 w-7 text-gray-500 hover:text-gray-700" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="flex items-center space-x-2 text-red-600 text-sm font-medium ml-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errors.password}</span>
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="h-6 w-6 text-primary-600 focus:ring-primary-500 border-gray-300 rounded-lg" />
              <span className="text-lg text-gray-700 font-medium">Remember me</span>
            </label>
            <div className="text-lg font-medium">
              <a href="#" className="text-primary-600 hover:text-primary-500 transition-colors">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`group relative w-full flex justify-center py-6 px-8 border border-transparent text-xl font-bold rounded-3xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all duration-300 transform ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed opacity-75'
                : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 hover:shadow-3xl hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] focus:ring-primary-500 focus:ring-offset-primary-200'
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-4 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </>
            ) : (
              <>
                Sign In
                <svg className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-lg">
            <span className="px-6 bg-white text-gray-500 font-medium">or continue with</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <button className="group w-full flex justify-center items-center px-8 py-4 border border-gray-300 shadow-xl rounded-2xl text-lg font-semibold text-gray-700 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200">
            <svg className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          
          <button className="group w-full flex justify-center items-center px-8 py-4 border border-gray-300 shadow-xl rounded-2xl text-lg font-semibold text-gray-700 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200">
            <svg className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-11.999-12-11.999s-12 5.372-12 11.999c0 5.991 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        {/* Create Account */}
        <div className="pt-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Don't have an account?{' '}
            <Link 
              to="/register" 
              className="font-bold text-primary-600 hover:text-primary-700 transition-colors hover:underline"
            >
              Create Account
            </Link>
          </p>
          <p className="text-sm text-gray-500">
            By signing in, you agree to our{' '}
            <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors hover:underline">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Demo Credentials - Remove in production */}
      <div className="absolute bottom-4 left-4 right-4 max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200 text-xs text-gray-600 text-center">
        <div className="font-semibold mb-2 text-gray-900">🔐 Demo Login</div>
        <div><strong>Email:</strong> demo@client.com</div>
        <div><strong>Password:</strong> password123</div>
      </div>
    </div>
  );
};

export default Login;