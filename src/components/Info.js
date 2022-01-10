import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile from '../images/profile1.jpg'
import './style/Card.scss'
import './style/Info.scss'

function Info() {
  return (
    <div className="info">
      <img src={Profile} className="info-avatar" alt="avatar" />
      <div className="content">
        <div className="info-detail">
          <h1 className="info-detail--name">Laura Smith</h1>
          <p className="info-detail--job">Frontend Developer</p>
          <small className="info-detail--website">laurasmith.website</small>
          <div className="info-buttons">
            <a className="info-buttons--email" href onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={["fas", "envelope"]} /> Email
            </a>
            <a className="info-buttons--linkedin" href onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info