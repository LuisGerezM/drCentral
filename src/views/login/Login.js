import { useEffect, useContext, useState } from "react";
import { signInWithGoogle } from "../../servers/firebase/Firebase";
import { AuthGoogleContext } from "../../contexts/googleContext/AuthGoogleProvider";
import { Redirect } from "react-router-dom";

import GoogleButton from "react-google-button";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "./styleLogin.css";
import ErrorDoctorSignIn from "../../components/errors/ErrorDoctorSignIn";
import { AuthDoctorContext } from "../../contexts/doctorContext/AuthDoctorProvider";

const Login = () => {
  const userGoogle = useContext(AuthGoogleContext);
  const { doctor, errorDrSignIn, loadingDoctor, statusDoctor } =
    useContext(AuthDoctorContext);

  const [redirect, setRedirect] = useState(null);

  const [showErrorDrLogin, setShowErrorDrLogin] = useState(false);

  useEffect(() => {
    if (errorDrSignIn) {
      setShowErrorDrLogin(true);
      setTimeout(() => {
        setShowErrorDrLogin(false);
      }, 9000);
    }

    return () => {
      setShowErrorDrLogin(false);
    };
  }, [errorDrSignIn]);

  useEffect(() => {
    if (doctor) {
      setRedirect("/doctor/dashboard");
    }
  }, [doctor]);

  if (loadingDoctor) return <div> Buscando Doctor ...</div>;

  if (redirect) return <Redirect to={redirect} />;

  return (
    <Container>
      <Row className="justify-content-md-center align-items-md-center row-principal">
        <Alert
          variant="primary"
          className="d-flex flex-column justify-content-center align-items-center py-5"
        >
          <Col md={12}>
            <h4 className="d-flex justify-content-center text-center">
              {" "}
              Bienvenido a Doctor Central{" "}
            </h4>
          </Col>
          <Col
            className="d-flex justify-content-center flex-md-column align-items-md-center mt-4"
            md={12}
          >
            {showErrorDrLogin && (
              <ErrorDoctorSignIn statusDoctor={statusDoctor} />
            )}
            <GoogleButton
              className="google-btn"
              label="Inicia sesión con Google"
              onClick={signInWithGoogle}
            />
          </Col>
        </Alert>
      </Row>
    </Container>
  );
};

export default Login;
