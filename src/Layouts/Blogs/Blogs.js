import React from 'react';
import styles from './Blogs.module.css';
import Header from '../../Components/Header/Header';
import BlogCard from '../../Components/BlogCard/BlogCard';
import Blogs_list from './Blogs_list';




const Blogs = (props) => {
    const list = Blogs_list.Blogs_list;
    return (
        <div className={styles.Body}>
            <Header />
            <div className={styles.container}>
            <div className={styles.heading}>Blogs</div>
            <div className={styles.sub}>
                {list.map((m,index)=>{
                    return(
                        <BlogCard heading={m.heading} desc={m.desc} link={m.link} index={index} key={m.heading} />
                    );
                })}
            </div>
            </div>
            
        </div>
    );
};


export default Blogs;