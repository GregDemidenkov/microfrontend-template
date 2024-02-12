import {App} from "@/components/App/App";
import {createBrowserRouter} from "react-router-dom";
// @ts-ignore
import service1Routes from 'service1/Router'
// @ts-ignore
import service2Routes from 'service2/Router'

export const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
        ...service1Routes,
        ...service2Routes
      ]
  },
]);