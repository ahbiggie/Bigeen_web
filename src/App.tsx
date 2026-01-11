import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { theme } from "./theme/theme"
import { MainLayout } from "./layout/MainLayout"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { RoadmapPage } from "./pages/RoadmapPage"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="roadmap" element={<RoadmapPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
