import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "./pages/home/HomePageLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
