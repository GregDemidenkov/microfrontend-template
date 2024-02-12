import {App} from "@/components/App/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Service1} from "@/pages/Service1";
import {Suspense} from "react";

const routes = [
  {
      path: "/service1",
      element: <App />,
      children: [
          {
              path: '/service1/first',
              element: <Suspense fallback={'Loading...'}><Service1 /></Suspense>
          },
          {
            path: '/service1/second',
            element: <Suspense fallback={'Loading...'}><div>Service1 SECOND ROUT</div></Suspense>
        },
      ]
  },
];

export const router = createBrowserRouter(routes);

export default routes;
