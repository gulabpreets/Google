import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from "../Components/Pages/All"
import Videos from "../Components/Pages/Videos"
import News from "../Components/Pages/News"
import Images from '../Components/Pages/Images';


const AllRoutes = () => {
    return (
      <>
      <Routes>
        {/* <Route path="/*" element={<Page404 />}/> */}
        <Route path="/all" element={<All />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
};

export default AllRoutes;