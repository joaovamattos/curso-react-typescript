import { Switch } from "react-router-dom";

import CustomRoute from "./Route";

import { Dashboard } from "../pages/Dashboard";
import { SignIn } from "../pages/SignIn";
import { useAuth } from "../contexts/auth";

export default function Routes() {
  const { signed } = useAuth();

  return (
    <Switch>
      <CustomRoute
        path="/dashboard"
        component={Dashboard}
        exact
        isPrivate
        signed={signed}
      />
      <CustomRoute
        path="/"
        component={SignIn}
        isPrivate={false}
        signed={signed}
      />
    </Switch>
  );
}
