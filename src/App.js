import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/navbarApp/NavbarTop";
import Dashboard from "./views/dashboard/Dashboard";
import Login from "./views/login/Login";
import PrivateRoute from "./views/dashboard/PrivateRoute";
import { Container } from "react-bootstrap";
import AuthGoogleContext from "./contexts/googleContext/AuthGoogleProvider";
import AuthDoctorContext from "./contexts/doctorContext/AuthDoctorProvider";

function App() {
  return (
    <AuthGoogleContext>
      <AuthDoctorContext>
        <HashRouter>
          <Container className="container-app">
            <NavbarTop />
            <Switch>
              <Route exact path="/login" component={Login} />
              <PrivateRoute path="/doctor/dashboard" component={Dashboard} />
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </Container>
        </HashRouter>
      </AuthDoctorContext>
    </AuthGoogleContext>
  );
}

export default App;
