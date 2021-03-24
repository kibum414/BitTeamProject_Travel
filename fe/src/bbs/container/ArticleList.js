import '../component/ArticleList.css';

const ArticleList = () =>
(
  <>
    <h2>Article List</h2>

    <table>
      <colgroup>
        <col width="5%" />
        <col width="60%" />
        <col width="10%" />
        <col width="15%" />
        <col width="10%" />
      </colgroup>

      <tr>
        <th>No</th>
        <th>Title</th>
        <th>Writer</th>
        <th>Date</th>
        <th>Views</th>
      </tr>
      <tr>
        <td>1</td>
        <td style={{ textAlign: "left" }}><a href="#">Title1</a></td>
        <td>Name1</td>
        <td>2021-03-14</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td style={{ textAlign: "left" }}><a href="#">Title2</a></td>
        <td>Name2</td>
        <td>2021-03-14</td>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
        <td style={{ textAlign: "left" }}><a href="#">Title3</a></td>
        <td>Name3</td>
        <td>2021-03-14</td>
        <td>3</td>
      </tr>
    </table>
  </>
)

export default ArticleList