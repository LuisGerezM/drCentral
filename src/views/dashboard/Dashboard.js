import { useRouteMatch } from "react-router-dom";
import { Sidebar } from "../../components/dashboard/Sidebar";
import routes from "./routes/routes";

const Dashboard = () => {

  const { path, url } = useRouteMatch();

  return (
    <>
      <Sidebar routes={routes} url={url} path={path} />
    </>
  );
};

export default Dashboard;
