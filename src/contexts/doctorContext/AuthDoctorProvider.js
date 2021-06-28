import { createContext, useContext, useEffect, useState } from "react";
import apiCall from "../../api";
import { AuthGoogleContext } from "../googleContext/AuthGoogleProvider";
import { workDomain } from "./Flavor";

export const AuthDoctorContext = createContext();

function AuthDoctorProvider({ children }) {
  const user = useContext(AuthGoogleContext);
  const [doctor, setDoctor] = useState(null);
  const [loadingDoctor, setLoadingDoctor] = useState(false);
  const [errorDrSignIn, setErrorDrSignIn] = useState(false);
  const [statusDoctor, setStatusDoctor] = useState({});

  useEffect(() => {

    const getDoctorApi = async (email) => {
      setLoadingDoctor(true);

      try {
        const apiUrl = "https://localhost/clinichistorybackend/index.php";
        const resultFlavor = workDomain();
        const dataDoctor = {
         // aqui va la data privada de la API
        };

        const doctorResult = await apiCall({
          url: apiUrl,
          method: "POST",
          body: JSON.stringify(dataDoctor),
        });

        if (doctorResult.state === "Success") {
          setDoctor(doctorResult.message);
        } else {
          setStatusDoctor(doctorResult);
          setErrorDrSignIn(true);
        }
      } catch (error) {
        console.log("error get doctor, algo salió mal");
      } finally {
        setLoadingDoctor(false);
      }
    };

    if (user) {
      const { email } = user;
      setErrorDrSignIn(false);
      getDoctorApi(email).catch("catch get doctor api");
    }

    return () => {
      setDoctor(null);
      setErrorDrSignIn(false);
      setStatusDoctor({});
    };
  }, [user]);
  
  return (
    <AuthDoctorContext.Provider
      value={{ doctor, errorDrSignIn, loadingDoctor, statusDoctor }}
    >
      {children}
    </AuthDoctorContext.Provider>
  );
}

export default AuthDoctorProvider;
