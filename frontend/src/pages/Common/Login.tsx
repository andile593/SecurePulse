import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const DEMO_EMAIL = 'demo@securepulse.co.za';
const DEMO_PASSWORD = 'demo1234';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err: any) {
      setError(
        err?.response?.data?.error || 'Invalid email or password'
      );
    } finally {
      setLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-4">

        {/* Demo Access Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4">
          <p className="text-sm font-semibold text-blue-800 mb-2">Demo Access</p>
          <div className="text-sm text-blue-700 space-y-1 mb-3">
            <p>Email: <span className="font-mono">{DEMO_EMAIL}</span></p>
            <p>Password: <span className="font-mono">{DEMO_PASSWORD}</span></p>
          </div>
          <button
            onClick={fillDemoCredentials}
            className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Use Demo Credentials
          </button>
        </div>

        {/* Login Card */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">SP</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">SecurePulse</h1>
          </div>
          <h2 className="text-lg font-semibold text-gray-700 mb-6">
            Sign in to your account
          </h2>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@securepulse.co.za"
                className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
