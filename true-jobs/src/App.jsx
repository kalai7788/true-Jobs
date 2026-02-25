import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import JobsPage from "./pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import ProfilePage from "./pages/ProfilePage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ChatPage from "./pages/ChatPage";
import SettingsPage from "./pages/SettingsPage";

// Recruiter Pages
import RecruiterDashboardPage from "./pages/recruiter/RecruiterDashboardPage";
import PostJobPage from "./pages/recruiter/PostJobPage";
import CandidateSearchPage from "./pages/recruiter/CandidateSearchPage";
import SubscriptionPage from "./pages/recruiter/SubscriptionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Candidate Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<OtpPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Recruiter Routes */}
        <Route path="/recruiter/dashboard" element={<RecruiterDashboardPage />} />
        <Route path="/recruiter/post-job" element={<PostJobPage />} />
        <Route path="/recruiter/candidates" element={<CandidateSearchPage />} />
        <Route path="/recruiter/plans" element={<SubscriptionPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

