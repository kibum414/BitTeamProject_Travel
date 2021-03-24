import '../component/ArticleForm.css';

const ArticleDetail = () =>
(
  <>
    <h2>Article Detail</h2>
    
    <div className="container">
      <form>
        <label for="title"><b>Title</b></label>
        <input type="text" id="title" name="title" readOnly/>
      
        <label for="content"><b>Content</b></label>
        <textarea name="content" style={{ height: "200px" }} readOnly></textarea>
      
        <div className="button">
          <input type="submit" value="List" />
          <input type="button" value="Edit"/>
          <input type="button" value="Delete" />
        </div>
      </form>
    </div>
  </>
)

export default ArticleDetail