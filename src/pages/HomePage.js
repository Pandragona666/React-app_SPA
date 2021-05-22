import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Gravel czy szosa?",
        author: "Krzychu Mróz",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id leo ac purus efficitur imperdiet in nec orci. Morbi posuere lorem nunc, nec mollis metus consequat et. Curabitur a feugiat urna. Morbi tortor purus, condimentum vitae mollis at, iaculis non nunc."
    },
    {
        id: 2,
        title: "Jak wypinać się z SPD?",
        author: "Bartosz Świeży",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id leo ac purus efficitur imperdiet in nec orci. Morbi posuere lorem nunc, nec mollis metus consequat et. Curabitur a feugiat urna. Morbi tortor purus, condimentum vitae mollis at, iaculis non nunc."
    },
    {
        id: 3,
        title: "Najpiękniejsze polskie szlaki rowerowe",
        author: "Miłosz Mozarella",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id leo ac purus efficitur imperdiet in nec orci. Morbi posuere lorem nunc, nec mollis metus consequat et. Curabitur a feugiat urna. Morbi tortor purus, condimentum vitae mollis at, iaculis non nunc."
    },
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div>{artList}</div>
    );
}

export default HomePage;