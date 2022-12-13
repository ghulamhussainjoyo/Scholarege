import React from 'react'
import {Routes, Route } from 'react-router-dom'

import MySunEditor from '../components/CreateArticle/MySunEditor'
import MyWysiwygEditor from '../components/CreateArticle/MyWysiwygEditor'
import CreateArticle from '../pages/CreateArticle'
function MyRoutes() {
  return (

    <Routes>
      <Route path='/' element={<CreateArticle />} />
      <Route path='/editor' element={<MySunEditor />} />
      <Route path='/ckeditor' element={<MyWysiwygEditor />} />
    </Routes>

  )
}

export default MyRoutes