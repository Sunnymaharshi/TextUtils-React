import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-sucess");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    if (cls != null) {
      console.log("in");
      document.body.classList.add("bg-" + cls);
    } else {
      if (mode === "light") {
        setMode("dark");
        document.body.classList.add("bg-dark");

        showAlert("Dark Mode Enabled", "success");
      } else {
        setMode("light");
        document.body.classList.add("bg-light");
        showAlert("Light Mode Enabled", "success");
      }
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About TextUtils"
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />

          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter Text to Analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
