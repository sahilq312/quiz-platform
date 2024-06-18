import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/admin";
import App from "../App";
import QuizApp from "../pages/quiz";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : '/admin',
                element : <Admin/>
            },
            {
                path : '/',
                element : <App/>
                
            }
        ]
    },
    {
        path : "/quiz",
        element : <QuizApp/>
    }
    
])

export default router;