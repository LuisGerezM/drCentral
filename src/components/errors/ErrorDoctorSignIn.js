import { Alert } from "react-bootstrap";

const ErrorDoctorSignIn = ({ statusDoctor: { message } }) => {
  return (
    <Alert className="mt-2" variant="danger">
      <Alert.Heading>Error!</Alert.Heading>
      <p> {message} </p>
      <Alert
        style={{
          backgroundColor: "hsl(230, 17%, 14%)",
          width: "65%",
          marginLeft: "18%",
        }}
      >
        <a
          href="http://play.google.com/store/apps/details?id=com.google.android.apps.maps"
          target="_blank"
          rel="noreferrer"
          style={{ color: "hsl(0, 0%, 100%)" }}
        >
          Encontrala en Playstore haciendo click
        </a>{" "}
      </Alert>
    </Alert>
  );
};

export default ErrorDoctorSignIn;
