import { Popover } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import './signinout.css'

export const App = () => {
    const [user, setUser] = React.useState(null)
    const [buttonLogin, setButtonLogin] = React.useState(null)
    const handleCallbackResponse = (response) => {

        if (response.credential) {
            console.log('response.credential JWT', response.credential)
            var userObject = jwt_decode(response.credential);
            setUser(userObject);
            document.getElementById('g-signin').style.display = 'none'
        }
        if (response.error) {
            console.log('response.error', response.error)
        }
    }
    const handleSignOut = () => {
        /* global google */
        google.accounts.id.disableAutoSelect()
        google.accounts.id.revoke()
        setUser(null)
        document.getElementById('g-signin').style.display = 'block'
    }

    useEffect(() => {
        const element = document.createElement('div');
        /* global google */
        google.accounts.id.initialize({
            client_id: '362893944630-ogk7c9qj1p9i2mjjr847h7rn0kp89uph.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        })
        google.accounts.id.renderButton(
            document.getElementById('g-signin'),
            {
                theme: 'outline',
                size: 'large',
                longtitle: true,
                type: 'standard',
                text: 'Sign in with Google',
                scope: 'profile email',
            }
        )
    }, [])

    return (
        <div>
            <div id="g-signin"></div>
            {
                user && <div className='user'>
                    <img className='img-user' src={user.picture} />
                    {user.name}
                    <button onClick={handleSignOut}>Sign out</button>
                    </div>
            }


        </div>
    )
}

export default App;