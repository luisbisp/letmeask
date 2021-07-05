import { createContext, ReactNode } from "react";

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
    return(
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.childern}
        </AuthContext.Provider>
    );
}