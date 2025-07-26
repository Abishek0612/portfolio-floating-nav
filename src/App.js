import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/foooter/Footer";

// Import Toastify for notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Navigation */}
      <Nav />

      {/* Main Sections */}
      <About />
      <Experience />
      <Education />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={3} // Maximum 3 toasts at once
        toastStyle={{
          background: "linear-gradient(135deg, #2c2c6c, #1f1f38)",
          color: "#ffffff",
          border: "1px solid rgba(77, 181, 255, 0.3)",
          borderRadius: "1rem",
          backdropFilter: "blur(10px)",
          fontFamily: "Poppins, sans-serif",
        }}
        progressStyle={{
          background: "linear-gradient(90deg, #4db5ff, #ffffff)",
        }}
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        progressClassName="custom-toast-progress"
      />
    </>
  );
}

export default App;
