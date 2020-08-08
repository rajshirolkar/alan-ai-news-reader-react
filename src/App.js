import React, { useEffect, useState } from  'react';
import alanBtn from '@alan-ai/alan-sdk-web';
  
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '1f21bed250b6ad3b1df532750abd39ab2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    console.log(articles);
                    setNewsArticles(articles);
                }
            }
        })         
    }, [])

    return(
        <div>
            <h1>Alan AI News Application</h1>
            <NewsCards articles = {newsArticles}></NewsCards>
        </div>
    );
}

export default App;