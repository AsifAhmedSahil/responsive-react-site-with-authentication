import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>Home {allNews.length}
    {
      allNews.map(news => <NewsSummaryCard key={allNews._id} news={news}></NewsSummaryCard>)
    }
    
    </div>
  )
}

export default Home