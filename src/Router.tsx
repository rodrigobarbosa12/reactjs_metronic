
import { lazy, Suspense } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
  } from 'react-router-dom';  
// import { useSelector, useDispatch } from 'react-redux';
import jwt from 'jsonwebtoken';
import { Spinner } from './components';
import { SIGNATURE } from './utils';

const Login = lazy(() => import('./pages/login/Login'));
const Home = lazy(() => import('./pages/home/Home'));

  const styles = {
    top: '300px',
    display: 'inline-block',
  };
  
  const PrivateRoute = ({ component: Component, ...rest }: any) => {
    // const dispatch = useDispatch();
    // const { user: { token } } = useSelector((state: any) => state);
  
    const token = 'asasddsa';

    if (!token) {
      return <Redirect to="/login" />;
    }
  
    jwt.verify(token, SIGNATURE, (err: any) => {
      if (err && err.message === 'jwt expired') {
        // dispatch({
        //   type: 'TOKEN',
        //   user: {
        //     token: '',
        //     name: '',
        //     id: 0,
        //   },
        // });
      }
    });
  
    return (
      <Route
        {...rest}
        render={(props) => (token ? <Component {...props} /> : <Redirect to="/login" />)}
      />
    );
  };
  
  const Routes = () => (
    <BrowserRouter>
      <Suspense fallback={<Spinner style={styles} />}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
  
  export default Routes;
  