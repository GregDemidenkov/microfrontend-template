import {App} from "@/components/App/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Service2} from "@/pages/Service2";
import {Suspense} from "react";

const routes = [
  {
      path: "/service2",
      element: <App />,
      children: [
          {
              path: '/service2/first',
              element: <Suspense fallback={'Loading...'}><Service2 /></Suspense>
          },
          {
            path: '/service2/second',
            element: <Suspense fallback={'Loading...'}><div>Service2 SECOND ROUT</div></Suspense>
        },
      ]
  },
];

export const router = createBrowserRouter(routes);

export default routes;
