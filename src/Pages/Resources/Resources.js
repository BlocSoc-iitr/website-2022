import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Blogs from '../../Layouts/Blogs/Blogs';
import Videos from '../../Layouts/Videos/Videos';
import styles from './Resources.module.css'


const Resources = (props) => {

    return (
        <>
             <div className={styles.navbar}>
                <Navbar />
            </div>
            <Blogs />
            <Videos />
            <Footer />
        </>
    );
};


export default Resources;