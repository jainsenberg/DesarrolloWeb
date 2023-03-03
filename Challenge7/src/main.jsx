import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GifExpertApp from './GiftExpertApp'
import { GifGrid } from './components/GifGrid'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
