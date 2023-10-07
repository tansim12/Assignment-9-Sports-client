import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import useAuthContext from "../useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useAuthContext();
  if (userLoading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
