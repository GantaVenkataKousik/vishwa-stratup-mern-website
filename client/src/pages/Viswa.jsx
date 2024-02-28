import React, { useEffect } from 'react';
import Animations from '../components/Animations.jsx';
import Page from './Page.jsx';
import '../styles/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

export default function Viswa({imageUrl}) {

    useEffect(() => {
        // Show a toast when the component mounts
        toast.success('Thank you for visiting my Portfolio🎉🎉🎉', {
          position: 'top-right',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          style: {
                fontWeight: 'bold',
                fontSize: '2rem',
            },
        })

        
    }, []);

    return (
        <>
            <Page imageUrl={imageUrl}/>
        </>
    );
}
