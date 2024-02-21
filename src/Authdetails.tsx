import { onAuthStateChanged } from "firebase/auth";
import  {useEffect, useState } from "react";
import { auth } from "./firebase";

const Authdetails = () => {
  const [authUser, setauthUser] = useState<any | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setauthUser(user);
      } else {
        setauthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  console.log(authUser)
  return <div></div>;
};

export default Authdetails;
