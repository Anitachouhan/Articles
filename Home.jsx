

import { useEffect, useState } from "react";
import ArticlesList from "./ArticlesList";

const Home = () => {

    const [articles, setarticles] = useState(null);
useEffect(()=>{
        if(localStorage.getItem("articles") == null)
        {
            localStorage.setItem("articles" , "[]" );
            console.log("creayted");
        }
        else
        {
            let a = localStorage.getItem("articles");
            a = JSON.parse(a);
            setarticles(a);
        }
    } , [] )



    return ( 
        <div>
            <h1> Add New Details </h1>
            <hr />


            <ArticlesList articles={articles}/>
          
             



        </div>
    );
}
export default Home;