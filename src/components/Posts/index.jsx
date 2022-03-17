import './styles.css'

import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                photo={post.photo}
                id={post.id} />
        ))}
    </div>


)