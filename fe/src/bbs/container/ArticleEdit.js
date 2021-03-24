import '../component/ArticleForm.css';

const ArticleEdit = () =>
(
  <>
    <h2>Article Edit</h2>

    <div className="container">
      <form>
        <label for="title"><b>Title</b></label>
        <input type="text" id="title" name="title" required />

        <label for="content"><b>Content</b></label>
        <textarea name="content" style={{ height: "200px" }} required />

        <div className="button">
          <input type="submit" value="Submit" />
          <input type="button" value="Cancel" />
        </div>
      </form>
    </div>
  </>
)

export default ArticleEdit