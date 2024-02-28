import React, { useState } from 'react';
import  Main  from '../components/Main.jsx';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function Page({imageUrl}) {

    return (
        <> 
            <Main imageUrl={imageUrl} />
            <Footer />
        </>
    );
}