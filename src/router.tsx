import { Route, Routes } from "react-router-dom";
import { PageHome, PageJsFundamentals, PageTricks } from "./pages";

export const Router = () => {
  const routerList = [
    { id: 1, path: "/", element: <PageHome /> },
    { id: 1, path: "/home", element: <PageHome /> },
    { id: 2, path: "/js-fundamentals", element: <PageJsFundamentals /> },
    { id: 2, path: "/tricks", element: <PageTricks /> },
    { id: 4, path: "/*", element: <PageHome /> },
  ];
  return (
    <Routes>
      {routerList.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ))}
    </Routes>
  );
};
