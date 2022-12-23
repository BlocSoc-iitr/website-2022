import React from 'react';
import styles from './Blogs.module.css';
import Header from '../../Components/Header/Header';
import BlogCard from '../../Components/BlogCard/BlogCard';




const Blogs = (props) => {

    return (
        <div className={styles.Body}>
            <Header />
            <div className={styles.heading}>Blogs</div>
            <div className={styles.container}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};


export default Blogs;