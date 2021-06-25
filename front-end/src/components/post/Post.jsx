import './post.css';

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" 
            src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing </span>
                <hr/>
                <span className="postDate">1 hora ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi quidem culpa ipsa, ex nostrum esse enim id officia dolores, labore tenetur voluptatum voluptatem deserunt, odio dolor illum iusto provident.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi quidem culpa ipsa, ex nostrum esse enim id officia dolores, labore tenetur voluptatum voluptatem deserunt, odio dolor illum iusto provident.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi quidem culpa ipsa, ex nostrum esse enim id officia dolores, labore tenetur voluptatum voluptatem deserunt, odio dolor illum iusto provident.</p>
        </div>
    )
}
