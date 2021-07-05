import { createContext, ReactNode, useState, useEffect } from "react";
import api from "../services/api";
import history from "../services/history";

interface Props {
  children?: ReactNode;
}

interface User {
  name: string;
}

interface AuthContextData {
  signed: boolean;
  signIn: () => void;
  loading: boolean;
  user: User;
}

const initialState = {
  signed: false,
  setSigned: () => {},
  signIn: () => {},
  loading: true,
  user: {
    name: "",
  },
};

export const AuthContext = createContext<AuthContextData>(initialState);

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>(initialState.user);
  const [loading, setLoading] = useState(initialState.loading);
  const [signed, setSigned] = useState(initialState.signed);

  useEffect(() => {
    const storedToken = localStorage.getItem("@Auth:TOKEN");
    const storedUser = localStorage.getItem("@Auth:USER");

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setSigned(true);
      api.defaults.headers.authorization = `Bearer ${storedToken}`;
    }

    setLoading(false);
  }, []);

  async function signIn() {
    try {
      setLoading(true);

      const { data } = await api.post("/signin");

      const apiUser = { name: data.name };

      api.defaults.headers.authorization = `Bearer ${data.token}`;

      localStorage.setItem("@Auth:TOKEN", data.token);
      localStorage.setItem("@Auth:USER", JSON.stringify(apiUser));
      localStorage.setItem("@Auth:SIGNED", "true");

      setUser(apiUser);
      setSigned(true);
      setLoading(false);

      history.push("/dashboard");
    } catch (error) {}
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
