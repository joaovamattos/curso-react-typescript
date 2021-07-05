import { ReactNode } from "react";
import { AuthProvider } from "./auth";

interface Props {
  children?: ReactNode;
}

function ContextProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ContextProvider;
