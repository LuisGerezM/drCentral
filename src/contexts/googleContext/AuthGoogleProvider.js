import { useState, useEffect, createContext } from "react";
import { auth } from "../../servers/firebase/Firebase";

export const AuthGoogleContext = createContext({ user: null });

function AuthGoogleProvider(props) {
  const [userGoogle, setUserGoogle] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, photoUrl } = user;
        setUserGoogle({
          displayName,
          email,
          photoUrl,
        });
      } else {
        setUserGoogle(user);
      }
    });

    return () => {
      setUserGoogle(null);
    };
  }, []);

  return (
    <AuthGoogleContext.Provider value={userGoogle}>
      {props.children}
    </AuthGoogleContext.Provider>
  );
}

export default AuthGoogleProvider;
