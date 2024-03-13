
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import product1 from "./imgs/product1.png";
import product2 from "./imgs/product2.png";
import product3 from "./imgs/product3.png";
import product4 from "./imgs/product4.png";

function Main() {
    return (
        <div className="d-flex justify-content-center">
            {/* Center the card */}
            <div className="card" style={{ maxWidth: '20rem', margin: '10px' }}>
                <img className="card-img-top" src={product3} alt="Product 3" />
                <div className="card-body">
                    <h5 className="card-title">CAUDALIE DUO LIPHAND VINOTHERAPIST 2023</h5>
                    <p className="card-text">130 DHS</p>
                    <a href="#" className="btn btn-primary">Acheter</a>
                </div>
            </div>
            <div className="card" style={{ maxWidth: '20rem', margin: '10px' }}>

                <img className="card-img-top" src={product2} alt="Product 2" />
                <div className="card-body">
                    <h5 className="card-title">BIODERMA SEBIUM PORE REFINER CONCENTRÉ 30 ML ACHETE + BIODERMA SEBIUM H2O 250ML OFFERT</h5>
                    <p className="card-text">166 DHS</p>
                    <a href="#" className="btn btn-primary">Acheter</a>
                </div>
            </div>
            <div className="card" style={{ maxWidth: '20rem', margin: '10px' }}>
                <img className="card-img-top" src={product1} alt="Product 1" />
                <div className="card-body">
                    <h5 className="card-title">ARKOPHARMA FORCAPIL LOTION ANTI-CHUTE 150 ML ACHETE + FORCAPIL SHAMPOOING 200 ML OFFERT</h5>
                    <p className="card-text">226 DHS</p>
                    <a href="#" className="btn btn-primary">Acheter</a>
                </div>
            </div>
            <div className="card" style={{ maxWidth: '20rem', margin: '10px' }}>
                <img className="card-img-top" src={product4} alt="Product 4" />
                <div className="card-body">
                    <h5 className="card-title">RACINE VITA TRAITEMENT INTENSIF ANTI-POUX ET LENTES PRÉ-SHAMPOOING ACHETE + PEIGNE À POUX OFFERT</h5>
                    <p className="card-text">58 DHS</p>
                    <a href="#" className="btn btn-primary">Acheter</a>
                </div>
            </div>
        </div>
    );
}
export default Main;
