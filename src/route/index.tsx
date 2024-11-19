import React from "react";
import { createBrowserRouter, NonIndexRouteObject } from "react-router-dom";
import Canvas from "../pages/canvas/index.tsx";
import DarkTheme from "../pages/darkTheme/index.tsx";
import ThreeJs from "../pages/threeJs/index.tsx";
import WebWorker from "../pages/webWorker/index.tsx";
import Progress from "../pages/progress/index.tsx";
import AutoImage from "../pages/autoImage/index.tsx";
import Taber from "../pages/taber/index.tsx";
import Framer from "../pages/framer/index.tsx";
import Home from "../pages/home/index.tsx";
import Info from "../pages/info/index.tsx";
import Scorll from "../pages/scorll/index.tsx";
import NotFind from "../pages/notFind/index.tsx";
import Flow from "../pages/flow/index.tsx";
import WebWorkerBlob from "../pages/webWorkerBlob/index.tsx";
import AutoScroll from "../pages/autoScroll/index.tsx";
import ShareWorker from "../pages/shareWorker/index.tsx";
import TestPage from "../pages/testpage/index.tsx";
import Test from "../pages/ystest/index.tsx";
import Zustand from "../pages/zustand/index.tsx";
export interface CustomRouteObject extends NonIndexRouteObject {
  path: string;
  element?: React.ReactNode | null;
}
export const routeList: CustomRouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/info",
        element: <Info />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/darkTheme",
    element: <DarkTheme />,
  },
  {
    path: "/Canvas",
    element: <Canvas />,
  },
  {
    path: "/threeJs",
    element: <ThreeJs />,
  },
  {
    path: "/webWorker",
    element: <WebWorker />,
  },
  {
    path: "/progress",
    element: <Progress />,
  },
  {
    path: "/autoImage",
    element: <AutoImage />,
  },
  {
    path: "/taber",
    element: <Taber />,
  },
  {
    path: "/framer",
    element: <Framer />,
  },
  {
    path: "/scorll",
    element: <Scorll />,
  },
  {
    path: "/flow",
    element: <Flow />,
  },
  {
    path: "/webWorkerBlob",
    element: <WebWorkerBlob />,
  },
  {
    path: "/autoScroll",
    element: <AutoScroll />,
  },
  {
    path: "/shareWorker",
    element: <ShareWorker />,
  },
  {
    path: "/testPage",
    element: <TestPage />,
  },
  {
    path: "/zustand",
    element: <Zustand />,
  },
  {
    path: "*",
    element: <NotFind />,
  },
] as const;

const globalRouter = createBrowserRouter([...routeList]);
export default globalRouter;
