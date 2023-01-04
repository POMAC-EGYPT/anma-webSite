import React from "react";
import { Navigate, Route } from "react-router-dom";


export const PrivateRoute = ({ component: Component, ...rest }) => {
 

  return (
    <Route
      {...rest}
      render={(props) =>
        <Navigate
          to={{ pathname: "/home",
          state: {
            from: props.location,
          }
        }}/>
      }
    />
  );
}
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);
