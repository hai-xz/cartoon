import Main from '../pages/Main'
import Cartoon from '../pages/Cartoon'
import Search from '../pages/Search'
import User from '../pages/User'
import Signin from '../views/user/Signin'
import Chapter from '../views/cartoon/Charpter'

const router=[
  {
    path:'/',
    element:<Main/>
  },
  {
    path:'/Cartoon/:id',
    element:<Cartoon/>,
    children:[
      {
        path:':chapter',
        element:<Chapter />
      }
    ]
  },
  {
    path:'/Search',
    element:<Search/>
  },
  {
    path:'/user',
    element:<User/>,
    children:[
      {
        path:'signin',
        element:<Signin />
      }
    ]
  }
]

export default router