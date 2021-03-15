import React from 'react'
import './Home.css'
import Product from'./Product.js'
function Home() {
    return (
        <div className = "home">
            <img 
                 className = "home__image"
                 src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 alt = "Home"
            />
            <div className = "home__row">
            <Product
                  title="The Memoirs of sherlock Holmes"
                  price = {11}
                  image = "https://digibok.se/content/images/26076.gif"
                  rating = {5}
                  id = {12345}
            />
            <Product
                  title="NIKE MERCURIAL SUPERFLY SIZE:9"
                  price = {100}
                  image = "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/wixktiz1v4jbucyjcolx/mercurial-superfly-7-elite-sg-pro-anti-clog-traction-football-boot-W7fDcg.jpg"
                  rating = {5}
                  id = {12345}
            />
            </div>
           <div className="home__row">
           <Product
                  title="DUREX PLAY STRAWBWERRY FLAVOURED SWEET INTIMATE 50ML LUBE"
                  price = {18}
                  image = "https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/h7e/he9/8871400177694/Durex_Lube_Strawberry_100ml_RBL1909745_FRONT.jpg"
                  rating = {5}
                  id = {12345}
            />
            <Product
                  title="KIDS-BOYS ADIDAS FOOTBALL REAL MADRID AWAY JERSEY"
                  price = {23}
                  image = "https://www.dosoccerjersey.net/images/LFP/real-madrid-2018-19-away-shirt-first-version.jpg"
                  rating = {5}
                  id = {12345}
            />
             <Product
                  title="Skore SCORE CONDOMS NOT OUT CLIMAX DELAY 3N Condom  (3S)"
                  price = {9}
                  image = "https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1560171119/xlx2lbilawx7carvxcr0.jpg"
                  rating = {5}
                  id = {12345}
            />
           </div>
        </div>
    );
}

export default Home
