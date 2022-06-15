import Home from "./../pages/Home";
import Requirements from "./../pages/Requirements";

const routes = [
  {
    path: "home",
    to: "/home",
    Component: Home,
    name: "Inicio",
  },
  {
    path: "requirements",
    to: "/requirements",
    Component: Requirements,
    name: "Requerimientos",
  },
];
export default routes;
