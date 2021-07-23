import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "elektrownia weglowa",
        author: "Piotr Świ** ",
        text: "pali prąd i robi węgiel"
    },
    {
        id: 2,
        title: "elektrownia wiatrowa",
        author: "Piotr Świ** ",
        text: "Pali wiatr i robi węgiel"
    },
    {
        id: 3,
        title: "elektrownia słoneczna",
        author: "Piotr Świ **",
        text: "Pali słońce i robi Lala "
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;