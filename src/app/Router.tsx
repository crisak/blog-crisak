import { Route, Routes } from "react-router-dom";
import { PageHome, PageJsFundamentals, PageTricks } from "../pages";
import { TricksHome, Debounce } from "../pages/pageTricks/components";

const childrenListTricks = [
  { id: 1, path: "all", element: <TricksHome /> },
  { id: 2, path: "debounce", element: <Debounce /> },
  { id: 3, path: "*", element: <TricksHome /> },
];

const routerList = [
  { id: 1, path: "/", element: <PageHome /> },
  { id: 2, path: "/home", element: <PageHome /> },
  { id: 3, path: "/js-fundamentals", element: <PageJsFundamentals /> },
  {
    id: 4,
    hasChildren: true,
    path: "/tricks",
    element: <PageTricks />,
    children: childrenListTricks,
  },
  { id: 5, path: "/*", element: <PageHome /> },
];

export const Router = () => {
  return (
    <Routes>
      {routerList.map(({ id, path, element, hasChildren, children }) => {
        if (hasChildren) {
          return (
            <Route key={id} path={path} element={element}>
              {children?.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
              ))}
            </Route>
          );
        }
        return <Route key={id} path={path} element={element} />;
      })}
    </Routes>
  );
};
