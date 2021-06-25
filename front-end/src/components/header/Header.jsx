import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://cdn.pixabay.com/photo/2015/12/05/23/16/office-1078869_960_720.jpg" alt="" />
        </div>
    )
}
