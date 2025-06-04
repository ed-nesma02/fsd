import { createBrowserRouter } from "react-router";
import { CategoryPage } from "@/pages/category";
import { MainPage } from "@/pages/main";
import { Layout } from "../layout/Layout";

export const router = createBrowserRouter([
	{
		path: '/',
    Component: Layout,
		children: [
      {index: true, Component: MainPage},
      {path: 'community', element: <a>Comm</a>},
      {path: ':category', Component: CategoryPage},
      {path: 'article', children: [
        {path: ':alias', element: <a>Article</a>}
      ]},
      {path: 'profile', children: [
        {index: true, element: <a>Profile</a>},
        {path: 'edit', element: <a>EditProfile</a>}
      ]},
    ]
	},
  {
    path: '/categories',
    element: <div></div>
  }
]);