import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isLogged, currentUser }) => {
  if (currentUser === undefined) {
    return null;
  } else {
    return isLogged ? children : <Navigate to="/" />;
  }
};

export default ProtectedRoute;
