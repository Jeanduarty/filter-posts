import './styles.css'

export const PostCard = ({ id,title,photo,body }) => (
    <div key={id} className="post">
        <img src={photo} alt={title}></img>
        <div className="post-content">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </div>
);
