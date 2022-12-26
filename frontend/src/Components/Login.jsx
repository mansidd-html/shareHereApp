import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import shareVedio from '../assets/share.mp4'
import { client } from '../client';
const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    }, []);

    const responseGoogle = async(response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        const { name, googleId, imageUrl } = await response.profileObj;
        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image: imageUrl
        }
        client.createIfNotExists(doc).then(() => {
            navigate('/', { replace: true });
        });
    }
    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video
                    src={shareVedio}
                    type='vedio/mp4'
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='h-full w-full object-cover'
                />
                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <h3 className='text-xl font-bold text-white'>SHARE_HERE</h3>
                    </div>
                    <div className='shadow-2xl'>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                            render={(renderProps) => (
                                <button
                                    type='button'
                                    onClick={renderProps.onClick}
                                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                                    disabled={renderProps.disabled}
                                >
                                    <FcGoogle className='mr-4' /> Sign in with Google
                                </button>
                            )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy='single_host_origin'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login