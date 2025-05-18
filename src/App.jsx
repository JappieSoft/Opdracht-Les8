import './App.css';
import {inventory, bestSellingTv} from './constants/inventory.js';
import salesCounter from './helpers/sales.js';
import stockCounter from "./helpers/stock.js";
import purchasedCounter from "./helpers/purchases.js";
import tvName, {tvPrice, tvImage, availableSizes} from "./helpers/tvInformation.js";

/*Temp bestand hieronder:*/
import showOutcomeInConsole from './constants/oefenbestand.js';


function App() {

    /*Temp entry hieronder:*/
    showOutcomeInConsole();


    console.log(`sold: ${salesCounter(inventory)}`);
    console.log(`purchased: ${stockCounter(inventory)}`);
    console.log(`to sell: ${purchasedCounter(inventory)}`);


    function meestVerkochtKlik() {
        const meestVerkochtSort =    [...inventory].sort((a, b) => b.sold - a.sold);
        console.log("Gesorteerd op meest Verkocht:")
        console.log(meestVerkochtSort);
    }

    function goedkoopsteKlik() {
        const GoedkoopsteSort =    [...inventory].sort((a, b) =>  a.price - b.price);
        console.log("Gesorteerd op goedkoopste tv:")
        console.log(GoedkoopsteSort);
    }

    function geschiktSportKlik() {
        const sportSort =    [...inventory].sort((a, b) => b.refreshRate - a.refreshRate);
        console.log("Gesorteerd geschikt voor Sport:")
        console.log(sportSort);
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
                                <img className="bannerIMG" src={tvImage(bestSellingTv)}
                                     alt="tv picture"></img>
                            </div>
                            <div className="deTvBannerText">
                                <p id="tvName">{tvName(bestSellingTv)}</p>
                                <p id="tvPrice">{tvPrice(bestSellingTv)}</p>
                                <p id="tvSizes">{availableSizes(bestSellingTv)}</p>
                                <p id="tvOptions"><img
                                    className="checkIcons" src="src/assets/check.png" alt="check icon"/> wifi <img
                                    className="checkIcons" src="src/assets/minus.png"
                                    alt="NOT check icon"/> speech <img
                                    className="checkIcons" src="src/assets/check.png" alt="check icon"/> hdr <img
                                    className="checkIcons" src="src/assets/check.png" alt="check icon"/> bluetooth <img
                                    className="checkIcons" src="src/assets/minus.png" alt="NOT check icon"/> ambilight
                                </p>
                            </div>
                        </article>
                    </section>
                    <h2>Alle Televisies</h2>
                    <section className="alleTVs">
                        <nav className="navbar">
                            <button className="navButton" onClick={meestVerkochtKlik}>Meest verkocht eerst?</button>
                            <button className="navButton" onClick={goedkoopsteKlik}>Goedkoopste eerst?</button>
                            <button className="navButton" onClick={geschiktSportKlik}>Meest geschikt voor sport eerst?
                            </button>
                        </nav>
                        <div className="tvOverzicht">

                            {/*  Opdracht 2A (geen id in inventory array dus foutmelding, geen id toegevoegd omdat het op een oefen opdracht lijkt:
                            <ul>
                                {inventory.map((tvs) => {
                                    return <li>{tvs.brand}</li>
                                })}
                            </ul>*/}

                            <ul>
                                {inventory.map((tvs) => (
                                    <li key={tvs.type}>
                                        <article className="deTvBanner">
                                            <div className="deTvBannerImg">
                                                <img className="bannerIMG" src={tvImage(tvs)} alt="tv picture"/>
                                            </div>
                                            <div className="deTvBannerText">
                                                <p id="tvName">{tvName(tvs)}</p>
                                                <p id="tvPrice">{tvPrice(tvs)}</p>
                                                <p id="tvSizes">{availableSizes(tvs)}</p>
                                                <ul className="tvOptionsList">
                                                    {tvs.options.map((option, index) => (
                                                        <li key={index}>
                                                            <img
                                                                className="checkIcons"
                                                                src={option.applicable ? "src/assets/check.png" : "src/assets/minus.png"}
                                                                alt={option.applicable ? "check icon" : "not checked icon"}
                                                            />{" "}
                                                            <span className="textIcons">{option.name}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </main>


        </>
    )
}

export default App
