import './style/Footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <a className="footer-button" href onClick={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
        </a>
        <a className="footer-button" href onClick={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" />
        </a>
        <a className="footer-button" href onClick={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={["fab", "instagram-square"]} size="2x" />
        </a>
        <a className="footer-button" href onClick={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
        </a>
      </div>
    </div>
  )
}

export default Footer