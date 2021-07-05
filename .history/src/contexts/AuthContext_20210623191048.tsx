import { createContext } from "react";

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
    childern: string;
}

export const AuthContext = createContext({} as AuthContexType);

export function AuthContextPtovider(props){
    return(
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.childern}
        </AuthContext.Provider>
    );
}