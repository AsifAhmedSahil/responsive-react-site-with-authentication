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
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    element:<Category></Category>
                },
                {
                    path:'/news/:id',
                    element:<News></News>
                },
        ]
    }

])
