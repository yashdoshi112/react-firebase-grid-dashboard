import logo from './logo.svg';
import './App.css';
import './firebase/config';
import Signup from './pages/Signup';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import Header from './Header';
import {UserContext, UserProvider} from './firebase/UserProvider';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ProfileRedirect from './router/ProfileRedirect';
import PrivateRoute from './router/PrivateRoute';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
        <Header>

        </Header>
        <div className="app">
            <div className="ui grid container">
                <Switch>
                    <ProfileRedirect exact path="/signup" component={Signup} />
                    <ProfileRedirect exact path="/login" component={Login} />
                    <PrivateRoute exact path="/profile/:id" component={Profile} />
                    <Route exact path="/">
                        <Redirect to="/login"/>
                    </Route>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
