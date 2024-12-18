import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Tipagem do Context
interface AuthContextType {
  isLoggedIn: boolean;
  toggleLogin: () => void;
  logIn: () => void;
  logOut: () => void;
}

// Criação do contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider que gerencia o estado
interface AuthProviderProps {
  children: ReactNode;
}


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const isLoggedStorage =  localStorage.getItem("isLoggedIn");

    console.log(isLoggedStorage);

    if(isLoggedStorage == "true"){
      setIsLoggedIn(true);
    } 
    
    if(isLoggedStorage == "false"){
      setIsLoggedIn(false)
    }


  },[])
  

  const logIn = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn","true");
  }

  const logOut = () => {
    
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn","false");

    console.log(localStorage.getItem("isLoggedIn"))
  }

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
   
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Este hook deve ser utilizado dentro do contexto adequado") ;
  }
  return context;
};
