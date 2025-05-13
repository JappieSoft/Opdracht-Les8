import './App.css';
import {inventory, bestSellingTv} from './constants/inventory.js';
import salesCounter from './helpers/sales.js';
import stockCounter from "./helpers/stock.js";
import purchasedCounter from "./helpers/purchases.js";
import tvName, { tvPrice, tvImage, availableSizes } from "./helpers/tvInformation.js";

/*Temp bestand hieronder:*/
import showOutcomeInConsole from './constants/oefenbestand.js';



function App() {

    /*Temp entry hieronder:*/
    showOutcomeInConsole();


    console.log(`sold: ${salesCounter(inventory)}`);
    console.log(`purchased: ${stockCounter(inventory)}`);
    console.log(`to sell: ${purchasedCounter(inventory)}`);


    function  meestVerkochtKlik () {
        console.log('Meest verkocht eerst?');
    }
    function  goedkoopsteKlik () {
        console.log('Goedkoopste eerst?');
    }
    function  geschiktSportKlik () {
        console.log('Geschikt voor sport eerst?');
    }


    return (

        <>
            <header className="outercontainer">
                <div className="innercontainter">
                    <div className="headerTitle">
                        <h1>Tech it easy dashboard</h1>
                    </div>
                </div>
            </header>
            <main className="outercontainer">
                <div className="innercontainter">
                    <h2>VerkoopOverzicht</h2>
                    <section className="verkoopOverzicht">
                        <div className="salesNumber numberArticle">
                            <p>Aantal verkocht producten</p>
                            <p>{salesCounter(inventory)}</p>
                        </div>
                        <div className="purchaseNumber numberArticle">
                            <p>Aantal ingekochte producten</p>
                            <p>{stockCounter(inventory)}</p>
                        </div>
                        <div className="toSellNumber numberArticle">
                            <p>Aantal te verkopen producten</p>
                            <p>{purchasedCounter(inventory)}</p>
                        </div>
                    </section>
                    <section className="bestVerkochteTv">
                        <h2>Best verkochte TV</h2>
                        <article className="deTvBanner">
                            <div className="deTvBannerImg">
                                <img id="bestSellerIMG" src={document.textContent = tvImage(bestSellingTv)}
                                     alt="tv picture"></img>
                            </div>
                            <div className="deTvBannerText">
                                <p id="tvName">{document.textContent = tvName(bestSellingTv)}</p>
                                <p id="tvPrice">{document.textContent = tvPrice(bestSellingTv)}</p>
                                <p id="tvSizes">{document.textContent = availableSizes(bestSellingTv)}</p>
                                <p id="tvOptions"><img
                                    className="check-icons" src="src/assets/check.png" alt="check icon"/> wifi <img
                                    className="check-icons" src="src/assets/minus.png" alt="NOT check icon"/> speech <img
                                    className="check-icons" src="src/assets/check.png" alt="check icon"/> hdr <img
                                    className="check-icons" src="src/assets/check.png" alt="check icon"/> bluetooth <img
                                    className="check-icons" src="src/assets/minus.png" alt="NOT check icon"/> ambilight
                                </p>
                            </div>
                        </article>
                    </section>
                    <h2>Alle Televisies</h2>
                    <section className="navButtons">
                        <nav className="navbar">
                            <button className="navButton" onClick={meestVerkochtKlik}>Meest verkocht eerst?</button>
                            <button className="navButton" onClick={goedkoopsteKlik}>Goedkoopste eerst?</button>
                            <button className="navButton" onClick={geschiktSportKlik}>Meest geschikt voor sport eerst?</button>
                    </nav>
                    </section>
                </div>
            </main>


        </>
    )
}

export default App
