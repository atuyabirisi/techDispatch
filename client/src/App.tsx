import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BlogPostPage from "./pages/BlogPostPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
