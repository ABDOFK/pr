import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="main-content">
                <div className="left box">
                    <h2>À Propos de Nous</h2>
                    <div className="content">
                        <p>Notre pharmacie est dédiée à fournir des produits pharmaceutiques de haute qualité et des services à notre communauté. Nous nous efforçons de garantir que votre santé et votre bien-être sont nos principales priorités.</p>
                        <div className="social">
                            {/* Mettre à jour les liens des réseaux sociaux */}
                            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>

                <div className="center box">
                    <h2>Visitez-Nous</h2>
                    <div className="content">
                        <div className="place">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span className="text">123 Avenu de  France, Rabat</span>
                        </div>
                        <div className="phone">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <span className="text">+1 (123) 456-7890</span>
                        </div>
                        <div className="email">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="text">info@pharmacy.com</span>
                        </div>
                    </div>
                </div>

                <div className="right box">
                    <h2>Contactez-Nous</h2>
                    <div className="content">
                        <form action="#">
                            <div className="email">
                                <div className="text">Email *</div>
                                <input type="email" required />
                            </div>
                            <div className="msg">
                                <div className="text">Message *</div>
                                <textarea rows="2" cols="25" required></textarea>
                            </div>
                            <div className="btn">
                                <button type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
