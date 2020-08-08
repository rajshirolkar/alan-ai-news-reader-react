import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({ articles }) => {
    return (
        <div>
            {articles.map((article, i) => (
                <NewsCard></NewsCard>
            ))}
        </div>
    )
}

export default NewsCards