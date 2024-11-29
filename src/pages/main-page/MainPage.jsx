import React from "react";
import { createCard } from "../../components/news-card/CreateCard"


const MainPage = () => {
    return (
        <div>
            {Array(10).fill(0).map(id => (createCard(id + 1)))}
        </div>
    )
}

export default MainPage;