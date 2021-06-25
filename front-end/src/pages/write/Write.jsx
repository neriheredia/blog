import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" 
            src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_960_720.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Tell your story"
                        className="writeInput writeText" 
                     ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
