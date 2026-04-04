import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import JobDetail from './pages/JobDetails';
import EmployerDashboard from './pages/EmployerDashboard';
import JobseekerDashboard from './pages/JobSeekerDashboard';
import ProtectedRoute from './component/ProtectedRoute';
import HomePage from './pages/HomePage'
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import Blogs from './pages/Blog';
import BlogDetail from './pages/BlogDetails';
import Footer from './component/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/jobs"         element={<Home />} />
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={
          <ContactPage/>
        }/>
        <Route path="/blogs"     element={<Blogs />} />
<Route path="/blogs/:id" element={<BlogDetail />} />



<Route path="/about" element={
  <AboutPage/>
}/>
        {/* Login ke baad hi dikhega */}
        <Route path="/employer-dashboard" element={
          <ProtectedRoute role="employer">
            <EmployerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/my-applications" element={
          <ProtectedRoute role="jobseeker">
            <JobseekerDashboard />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;