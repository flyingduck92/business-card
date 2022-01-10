import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { fas, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas, faEnvelope, faLinkedin, faTwitter, faFacebook, faInstagram, faGithub)

function App() {
  document.title = 'React Business Card'
  return (
    <div className="card">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
