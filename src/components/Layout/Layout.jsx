import { Sidebar } from "./Sidebar/Sidebar";
import { RoutesConfig } from "../../Routes/Routes";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <RoutesConfig />
    </div>
  );
};

export { Layout };
