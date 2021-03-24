import '../component/ArticleForm.css';

const ArticleAdd = () =>
(
  <>
    <h2>Article Add</h2>

    <div className="container">
      <form action="/action_page.php">
        <label for="title"><b>Title</b></label>
        <input type="text" id="title" name="title" placeholder="Enter Title" required />

        <label for="content"><b>Content</b></label>
        <textarea id="content" name="content" placeholder="Write something.."
            style={{ height: "200px" }} required />

        <div className="button">
            <input type="submit" value="Submit" />
            <input type="button" value="Cancel" />
        </div>
      </form>
    </div>
  </>
)

export default ArticleAdd