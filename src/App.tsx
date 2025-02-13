import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { Heart, MapPin, Calendar, MessageCircleHeart, Video, Plane, Menu, X, LogOut } from 'lucide-react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LoveLetterPage from './pages/LoveLetterPage';
import RitualsPage from './pages/RitualsPage';
import TravelPage from './pages/TravelPage';
import LoveNotesPage from './pages/LoveNotesPage';
import CountdownPage from './pages/CountdownPage';
import Watermark from './components/Watermark';

function RequireAuth({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem('userEmail');
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function SideNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const navItems = [
    { icon: MessageCircleHeart, label: 'Love Letters', path: '/love-letter' },
    { icon: Video, label: 'Virtual Date', path: '/virtual-date' },
    { icon: Calendar, label: 'Countdown', path: '/countdown' },
    { icon: MapPin, label: 'Location Share', path: '/location' },
    { icon: Plane, label: 'Travel Plans', path: '/travel' },
    { icon: Heart, label: 'Love Rituals', path: '/rituals' },
    { icon: Heart, label: 'Love Notes', path: '/love-notes' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      )}

      <div className={`fixed top-0 left-0 h-full bg-white/95 backdrop-blur-lg shadow-2xl transition-all duration-300 z-40
        ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
        <div className="p-6 flex flex-col h-full">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <Heart className="w-6 h-6 text-pink-500" />
            <span className="text-xl font-semibold text-gray-800">Twogether</span>
          </Link>
          <nav className="space-y-2 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${location.pathname === item.path
                      ? 'bg-pink-50 text-pink-600'
                      : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 mt-4 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideNav />
      <div>
        {children}
      </div>
      <Watermark />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50">
        <Routes>
          <Route path="/login" element={<><LoginPage /><Watermark /></>} />
          <Route path="/" element={
            <RequireAuth>
              <Layout>
                <HomePage />
              </Layout>
            </RequireAuth>
          } />
          <Route path="/love-letter" element={
            <RequireAuth>
              <Layout>
                <LoveLetterPage />
              </Layout>
            </RequireAuth>
          } />
          <Route path="/rituals" element={
            <RequireAuth>
              <Layout>
                <RitualsPage />
              </Layout>
            </RequireAuth>
          } />
          <Route path="/travel" element={
            <RequireAuth>
              <Layout>
                <TravelPage />
              </Layout>
            </RequireAuth>
          } />
          <Route path="/love-notes" element={
            <RequireAuth>
              <Layout>
                <LoveNotesPage />
              </Layout>
            </RequireAuth>
          } />
          <Route path="/countdown" element={
            <RequireAuth>
              <Layout>
                <CountdownPage />
              </Layout>
            </RequireAuth>
          } />
          <Route path="*" element={
            <RequireAuth>
              <Layout>
                <div className="p-8">Coming Soon...</div>
              </Layout>
            </RequireAuth>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;