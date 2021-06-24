import React from 'react';
import Tittle from '../Components/Tittle';
import allBlogs from '../Components/allBlogs';

function BlogsPage() {
    return (
        <div >
            <Tittle title={'More'} span={'More'} />
            {/* <div className="b-title">
                <Tittle title={'MY Journey'} span={'MY Journey'} />
                <p>One of my personal goals is to create a community where help and volunteering are easily accessible and reciprocated.
               As someone who benefited greatly from community help growing up, I wish to reciprocate this and make changes with my abilities.
               <span> Follow my journey as I work to achieve this goal!</span></p> 
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt=""/>
                                <a href={blog.link} target='blank' className="blog-link">
                                    {blog.title}
                                </a>
                                <p>{blog.text}</p>
                            </div>
                        </div>
                    })
                }
            </div> */}
            
        </div>
    )
}

export default BlogsPage;
