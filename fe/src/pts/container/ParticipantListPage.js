import { Link } from 'react-router-dom'
import List from '../component/ParticipantList'

const ParticipantList = () => (
  <>
    <h3>참가자 리스트</h3>

    <List />
    
    <Link to="">
      <button>홈으로</button>
    </Link>
    <Link to="/participants/register">
      <button>등록</button>
    </Link>
  </>
)

export default ParticipantList