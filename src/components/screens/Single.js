import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Comment from "../parts/Comment";
import PostDescription from "../parts/PostDescription";
const Single = () => {
    return (
        <>
        <Header/>
    
        <div className="single-post no-sidebar">
        <PostDescription/>
        <Comment/>

				</div>



        <Footer/>
    </>
    );
}
export default Single;