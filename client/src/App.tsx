import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BlogPostPage from "./pages/BlogPostPage";
import ViewAllCiCdArticles from "./pages/CicdArticlesPage";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import CloudNativePage from "./pages/CloudNativePage";
import AdminDashboardPage from "./pages/AdminDashBoardPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<BlogPostPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/all/cicd" element={<ViewAllCiCdArticles />} />
        <Route path="/all/cloud_native" element={<CloudNativePage />} />
      </Routes>
    </BrowserRouter>
  );
}
