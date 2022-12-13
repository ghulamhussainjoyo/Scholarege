import React, { Fragment, useState } from 'react'
import BreadCrumbC from '../components/MyBreadCrumb';
import Article from '../components/Article/Article';
import ArticleSidebar from '../components/Article/ArticleSidebar';
import ArticleHeader from '../components/Article/ArticleHeader';



function Scholarship() {

  const [titleImage, setTitleImage] = useState(0);
  const breadCrumbList = ['home', 'scholarship']

  return (
    <Fragment>
      <ArticleHeader
        titleImage={titleImage}
        setTitleImage={setTitleImage}
      />
      <section className=" sm:mr-10 sm:ml-20 m-5 sm:m-0'">
        <BreadCrumbC
          name=''
          breadCrumbList={breadCrumbList}
        />
        <br />
        <br />
        <div className='article-container flex items-start justify-between sm:gap-10'>
          <Article />
          <ArticleSidebar />
        </div>
      </section>

    </Fragment>
  )
}

export default Scholarship