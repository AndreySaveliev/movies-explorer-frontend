import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children, isLogged}) => {
  return isLogged ? children : <Navigate to='/' />
}

export default ProtectedRoute