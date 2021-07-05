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

export const AuthContext = createContext({} as AuthContexType);


export function AuthContextPtovider(){
    return(
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            
        </AuthContext.Provider>
    );
}