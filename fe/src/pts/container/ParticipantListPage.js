import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import List from '../component/ParticipantList'
import Pagination from '../component/Pagination'
import '../css/List.css'

const ParticipantList = () => {

  const [list, setList] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNum) => setCurrentPage(pageNum)

  const getList = () => {
    axios.get(`http://localhost:8080/participants`)
      .then(res => {
        console.log(res)
        setList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    console.log('getList')

    getList()
  }, [])

  return (
    <>
      <h3>참가자 리스트</h3>

      <List list={currentPosts} indexOfFirstPost={indexOfFirstPost} />

      <Pagination postsPerPage={postsPerPage} totalPosts={list.length} paginate={paginate} />
    
      <br />
      <div className="btn">
        <Link to="">
          <button>홈으로</button>
        </Link>
        <Link to="/participants/register">
          <button>등록</button>
        </Link>
      </div>
    </>
  )
}

export default ParticipantList