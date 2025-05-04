import './App.css';
import {inventory, bestSellingTv} from './constants/inventory.js';
import salesCounter from './helpers/sales.js';
import stockCounter from "./helpers/stock.js";
import purchasedCounter from "./helpers/purchases.js";


function App() {

    console.log(`sold: ${salesCounter(inventory)}`);
    console.log(`purchased: ${stockCounter(inventory)}`);
    console.log(`to sell: ${purchasedCounter(inventory)}`);


    return (

        <>
            <header>
                <div className="headerTitle">
                    <h1>Tech it easy dashboard</h1>
                </div>
            </header>
            <main>
                <section className="verkoopOverzicht">
                    <h2>VerkoopOverzicht</h2>
                    <div className="salesNumber">
                        <p>Aantal verkocht producten</p>
                        <p>{salesCounter(inventory)}</p>
                    </div>
                    <div className="purchaseNumber">
                        <p>Aantal ingekochte producten</p>
                        <p>{stockCounter(inventory)}</p>
                    </div>
                    <div className="toSellNumber">
                        <p>Aantal te verkopen producten</p>
                        <p>{purchasedCounter(inventory)}</p>
                    </div>
                </section>
                <section className="bestVerkochteTv">
                    <h2>Best verkochte TV</h2>
                    <article className="deTvBanner">

                    </article>
                </section>
            </main>



        </>
            )
            }

            export default App
