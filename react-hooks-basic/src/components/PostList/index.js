import React from 'react';

const PostList = (props) => {
    const {post} = props
    const {title} = post
    
    return (
        <li>
            <p>{title}</p>
        </li>
    )
}

export default PostList