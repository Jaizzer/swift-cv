import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Experience from './Experience'
import Contact from './Contact'
import Education from './Education'
import Image from './Image'
import Name from './Name'
import Title from './Title'
import Area from './Area'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>Website not yet completed!</div>
    <Image></Image>
    <Name></Name>
    <Title></Title>
    <Area heading="Education">
        <Education></Education>
    </Area>
    <Area heading="Work Experience">
        <Experience></Experience>
    </Area>
    <Area heading="Contact">
        <Contact></Contact>
    </Area>
  </React.StrictMode>,
)
