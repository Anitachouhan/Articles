import { useState } from "react";

const Addarticles = () => {

    const [title, settitle] = useState("");
    const [imageurl, setimageurl] = useState("");
    const [subtitle , setsubtitle]=useState("")
    // const handleDelete=({id})=>{
    //     setArticles(articles.filter((article)=>article.id !==id))
    // }

    let handlePublish = (e)=>{
        e.preventDefault();
        let newArticle = {imageurl,title , subtitle};

        let a = JSON.parse(localStorage.getItem("articles"));
        a.push(newArticle);

        a = JSON.stringify(a);

        localStorage.setItem("articles" , a);

        alert("added");

        window.location.reload();

    }

    return ( 
    <div>

        <form onSubmit={handlePublish}>
            <input type="url" placeholder="Imageurl" 
            value={imageurl} onChange={(e)=>{setimageurl(e.target.value)}} />
            <br />
             <input type="text" placeholder="title" 
            value={title} onChange={(e)=>{settitle(e.target.value)}} />
            <br />
              <input type="text" placeholder="Subtitle" 
            value={subtitle} onChange={(e)=>{setsubtitle(e.target.value)}} />
   <br />

            <input type="submit" value="added btn" />
        </form>
        {/* <div>
                                <button className="button-edit task-button">
                                    <i className="fa-fa-check-circle"></i>
                                </button>
                                <button className="button-edit task-button" onClick={()=>handleDelete(article)}>
                                    <i className="fa-fa-check-circle"></i>
                                </button>
                            </div> */}

    </div> );
}

export default Addarticles