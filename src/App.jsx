import './App.css';
import {inventory, bestSellingTv} from './constants/inventory.js';
import salesCounter from './helpers/sales.js';
import stockCounter from "./helpers/stock.js";
import purchasedCounter from "./helpers/purchases.js";
import tvName, { tvPrice, tvImage ,availableSizes } from "./helpers/tvInformation.js";


function App() {

    console.log(`sold: ${salesCounter(inventory)}`);
    console.log(`purchased: ${stockCounter(inventory)}`);
    console.log(`to sell: ${purchasedCounter(inventory)}`);
/*    console.log(`bestseller name: ${tvName(bestSellingTv)}`);
    console.log(`bestseller price: ${tvPrice(bestSellingTv)}`);
    console.log(`bestseller size: ${availableSizes(bestSellingTv)}`);*/


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
                                <img id="bestSellerIMG" src={document.textContent = tvImage(bestSellingTv)} alt="tv picture"></img>
                            </div>
                            <div className="deTvBannerText">
                            <p id="tvName">{document.textContent = tvName(bestSellingTv)}</p>
                            <p id="tvPrice">{document.textContent = tvPrice(bestSellingTv)}</p>
                            <p id="tvSizes">{document.textContent = availableSizes(bestSellingTv)}</p>
                            </div>
                        </article>
                    </section>
                </div>
            </main>


        </>
    )
}

export default App
