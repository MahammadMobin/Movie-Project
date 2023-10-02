import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Rootpage/Root.jsx'
import Home from './pages/Homepage/Home.jsx'
import Detail from './pages/Detailspage/Detail'
import Search from './pages/Searchpage/Search'
import MoveContext from './context/MoveContext'
import { apiKey } from './constant/tmdbApiKey'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail',
        element: <Detail />
      },
      {
        path: '/detail/:sid',
        loader: ({ params }) => fetch(`https://api.themoviedb.org/3/movie/${params.sid}?api_key=${apiKey}`),
        element: <Detail />
      },
      {
        path: '/search',
        element: <Search />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoveContext>
      <RouterProvider router={router} />
    </MoveContext>
  </React.StrictMode>,
)
