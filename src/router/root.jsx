import { Suspense, lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const Loading = <div>Loading....</div>

const Main = lazy(() => import("../pages/main/MainPage.jsx"));

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    }
])

export default root;