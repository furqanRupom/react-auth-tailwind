import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';

const Profile = () => {
    const {user,updateTheUserProfile} = useContext(AuthContext)

   updateTheUserProfile().then((result)=> {console.log(result)}).catch(error => console.log(error))
    return (
        <div>
            welcome ready for next lesson?
        </div>
    );
};

export default Profile;