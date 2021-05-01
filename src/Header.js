import React from 'react';
import {logout} from './firebase/auth';
import {useHistory} from 'react-router-dom';
import {useSession} from './firebase/UserProvider';

function Header() {
  const history = useHistory();

  const {user} = useSession()

  const logoutUser = async () => {
    await logout();
    console.log("logout", user)
    history.push('/login')
  }
  return (
        <div>
            Header
            {!!user && <button className="ui secondary button logout" onClick={logoutUser}> 
                LOGOUT
            </button>}
        </div>
  );
}

export default Header;