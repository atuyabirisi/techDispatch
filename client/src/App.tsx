import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BlogPostPage from "./pages/BlogPostPage";
import ViewAllCiCdArticles from "./pages/CicdArticlesPage";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import CloudNativePage from "./pages/CloudNativePage";
import AdminDashboardPage from "./pages/AdminDashBoardPage";
import { Toaster } from "react-hot-toast";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ForumLandingPage from "./pages/ForumLAndingPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<BlogPostPage />} />
        <Route path="/dashboard" element={<AdminDashboardPage />} />
        <Route path="/all/cicd" element={<ViewAllCiCdArticles />} />
        <Route path="/all/cloud_native" element={<CloudNativePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="/forum" element={<ForumLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
