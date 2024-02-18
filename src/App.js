import logo from './logo.svg';
import './App.css';

import { AuthProvider, useAuth } from './Authentication/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SplashLayout from './Layouts/Splash';
import AuthenticatedLayout from './Layouts/Authenticated';

import Login from './Pages/Login';
import Logout from './Pages/Logout';
function Home() {
  return (
    <h2>Home sweet home</h2>
  );
}

function AppRoutes() {
  const auth = useAuth();

  return (
    <Router>
      {auth === undefined || !auth.isLoggedIn ? (
        <SplashLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </SplashLayout>
      ) : (
        <AuthenticatedLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </AuthenticatedLayout>
      )}
    </Router>
  );
}

const App = () => (
  <div className="App">
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </div>
);


export default App;