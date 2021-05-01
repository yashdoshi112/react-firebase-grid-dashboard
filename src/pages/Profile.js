import React from 'react'
import {useSession} from '../firebase/UserProvider';

const Profile = () => {
    const {user} = useSession()
    console.log("profile", user)

    if(!user) {
        
    }

    return (
        <div>
            <p>Name : {user.displayName} </p>
            <p>Email : {user.email}</p>
            <p>ID: {user.uid}</p>
        </div>
    )
}

export default Profile;