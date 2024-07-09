import Whatsapp from '../images/whatsapp.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'

export default function Footer() {
  return (
    <footer>
        <hr className="line"/>
        <div className="footer">
          <img className="wp" alt="whatsapp" src={Whatsapp} />
          <img className="fb" alt="facebook" src={Facebook} />
          <img className="insta" alt="instagram" src={Instagram} />
          <img className="twit" alt="twitter" src={Twitter} />
        </div>
    </footer>
  )
}