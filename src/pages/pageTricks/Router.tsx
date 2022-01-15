import { Route, Routes } from "react-router-dom";
import { Debounce, TricksHome } from "./components";

export const Router = () => {
  const routerList = [
    { id: 4, path: "/tricks/all", element: <TricksHome /> },
    { id: 2, path: "/tricks/debounce", element: <Debounce /> },
    { id: 4, path: "/tricks/*", element: <TricksHome /> },
  ];
  return (
    <Routes>
      {routerList.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ))}
    </Routes>
  );
};
