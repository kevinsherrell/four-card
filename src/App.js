import React from 'react';
import {cardData} from './assets/javascript/cards'
import Card from './components/card'

function App() {
    return (
        <div className="App">
            <header className={"header"}>
                <div className="container">

                    <h1 className="header__primary">Reliable, efficient delivery</h1>
                    <h3 className="header__secondary">Powered by Technology</h3>
                    <p className="header__intro">Our Artificial Intelligence powered tools use millions of project data
                        points to ensure that your project is successful</p>
                </div>

            </header>
            <section className="content">
                <div className="container">

                    <div className="content__card-container">
                        <Card header={cardData[0].header} bodyText={cardData[0].bodyText} image={cardData[0].image}/>
                    </div>
                    <div className="content__card-container">
                        <Card header={cardData[1].header} bodyText={cardData[1].bodyText} image={cardData[1].image}/>
                        <Card header={cardData[2].header} bodyText={cardData[2].bodyText} image={cardData[2].image}/>
                    </div>
                    <div className="content__card-container">
                        <Card header={cardData[3].header} bodyText={cardData[3].bodyText} image={cardData[3].image}/>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default App;
