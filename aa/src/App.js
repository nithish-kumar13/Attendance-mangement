import './App.css';
// import 'bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
// import Home from './Pages/Home';
import AuthRoute from './components/AuthRoute';
import routes from './data/routes';
import Dashboard from './pages/Dashboard';
import { useStateValue } from './contextAPI/StateProvider';


function App() {
  const [{ isLogin }, dispatch] = useStateValue();


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <AuthRoute condition={isLogin} redirectTo="/" Component={Login} />
            }
            exact
          />
          <Route
            path="/"
            element={
              <AuthRoute
                condition={!isLogin}
                redirectTo="/login"
                Component={Dashboard}
              />
            }
          >
            {routes.map(({ Component, path }) => (
              <Route path={path} element={<Component />} key={path} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
