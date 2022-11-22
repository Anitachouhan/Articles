const ArticlesList = ({articles,setArticles}) => {
    const handleDelete=({id})=>{
        setArticles(articles.filter((article)=>article.id !==id));
    }
    
    return ( 
        <div>

            {
                articles && articles.map((article)=>{
                    return (
                      <li className="list-item" key={article.id}>
                         <input type="url"  value={article.imageurl} placeholder="imageurl" className="list" onChange={(e)=>e.preventDefault()}/>
                         <br />
                        <input type="text"  value={article.title}  placeholder="title"className="list" onChange={(e)=>e.preventDefault()}/>
                        <br />
                        <input type="text"  value={article.subtitle} placeholder="subtitle" className="list" onChange={(e)=>e.preventDefault()}/>
                        <div>
                        <button className="button-edit task-button" onClick={()=>handleEdit(article)}>
                                    <i className="fa fa-edit" ></i>
                                </button>
                                <button className="button-delete task-button" onClick={()=>handleDelete(article)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                        </div>
                      </li>
                    )

                })

            }

        </div>
    );
}
export default ArticlesList;

