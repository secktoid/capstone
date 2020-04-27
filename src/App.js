import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Home from "./components/layout/Home";
import Services from "./components/layout/Services";
import Uploader from "./components/layout/Uploader";
import ImageGallery from "./components/layout/ImageGallery";
import CreateProject from "./components/projects/CreateProject";
import Footer from "./components/layout/Footer";
import Contact from "./components/layout/Contact";
import "react-image-lightbox/style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
          <Route path="/gallery" component={ImageGallery} />
          <Route path="/uploader" component={Uploader} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
