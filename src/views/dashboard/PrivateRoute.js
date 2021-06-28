import { useContext } from "react";
import { Route, Redirect } from "react-router";
import { AuthDoctorContext } from "../../contexts/doctorContext/AuthDoctorProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { doctor } = useContext(AuthDoctorContext);

  return (
    <Route {...rest}>
      {" "}
      {doctor ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
