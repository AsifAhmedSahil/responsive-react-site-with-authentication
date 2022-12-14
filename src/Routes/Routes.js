import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home"
import Category from "../Pages/Catagory/Category"
import News from "../Pages/News/News"


export const Routes = createBrowserRouter([

    {
        path:'/',
        element:<Main/>,
        children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=> fetch('http://localhost:5000/news')
                },
                {
                    path:'/category/:id',
                    element:<Category></Category>,
                    loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`)
                },
                {
                    path:'/news/:id',
                    element:<News></News>,
                    loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
                },
        ]
    }

])
