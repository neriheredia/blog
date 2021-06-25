import './singlepost.css';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" 
                src="https://cdn.pixabay.com/photo/2016/03/09/09/17/desktop-1245714_960_720.jpg" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum, dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostAuthor">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, officia, officiis commodi illo corrupti similique dolor optio excepturi obcaecati dicta laudantium eligendi ut nemo fugit quis architecto qui laborum voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, officia, officiis commodi illo corrupti similique dolor optio excepturi obcaecati dicta laudantium eligendi ut nemo fugit quis architecto qui laborum voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, officia, officiis commodi illo corrupti similique dolor optio excepturi obcaecati dicta laudantium eligendi ut nemo fugit quis architecto qui laborum voluptates?</p>
            </div>
        </div>
    )
}
