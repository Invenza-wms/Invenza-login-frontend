
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';


const Dashboard = () => (
  <div className="min-h-screen flex items-center justify-center bg-green-100 text-xl font-bold">
    Welcome to the Dashboard
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

