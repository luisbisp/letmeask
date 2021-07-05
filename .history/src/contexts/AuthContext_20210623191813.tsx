import { } from "react";
import { createContext, ReactNode,  useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
  type AuthContexType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }

type AuthContextPtoviderProps = {
    childern: ReactNode;
}

export const AuthContext = createContext({} as AuthContexType);

export function AuthContextPtovider(props: AuthContextPtoviderProps){

    const [user, setUser] = useState<User>();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          const { displayName, photoURL, uid } = user
  
          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account.')
          }
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
      })
      return () => {
        unsubscribe();
      }
    }, [])
}
    async function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider;
  
      const result = await auth.signInWithPopup(provider);
  
      if (result.user) {
        const { displayName, photoURL, uid } = result.user
  
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }



    return(
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.childern}
        </AuthContext.Provider>
    );
}