import React from "react";
import { createCard } from "../../components/news-card/CreateCard"


const MainPage = () => {
    return (
        <div>
            {Array(10).fill(0).map(id => (createCard(id)))}
        </div>
    )
}

export default MainPage;