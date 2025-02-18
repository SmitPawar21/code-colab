import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/your-projects" element={<DashboardPage />} />
          <Route path="/all-files" element={<DashboardPage />} />
          <Route path="/friends" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/setting" element={<DashboardPage />} />
          <Route path="/help" element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
