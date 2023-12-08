import React from 'react'
import './RightSideBar.css'
import Widget from './Widget.jsx'
import WidgetTags from './WidgetTags.jsx'

const RightSideBar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget />
        <WidgetTags />
    </aside>
  )
}

export default RightSideBar
