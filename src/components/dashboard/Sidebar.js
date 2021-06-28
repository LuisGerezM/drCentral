import { Col, Row } from "react-bootstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import LinksSidebar from "./LinksSidebar";
import "./styleSidebar.css";

export const Sidebar = ({ routes, url, path }) => {
  const getRoutes = (routes) => {
    return routes.map((item, key) => {
      if (path === "/doctor/dashboard") {
        let urlName = path + "/" + item.url;
        return (
          <Route
            exact
            path={urlName}
            render={(props) => <item.component {...props} routes={routes} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Row>
      <Col className="d-flex flex-row" md={11}>
        <Col
          className="sidebar characteristics-text d-flex flex-md-column justify-content-center px-md-0"
          md={2}
        >
          <LinksSidebar routes={routes} url={url} />
        </Col>
        <Col className="pl-md-0" md={11} lg={11}>
          <Switch>
            {getRoutes(routes)}
            <Route path="*">
              <Redirect to="/doctor/dashboard/patients" />
            </Route>
          </Switch>
        </Col>
      </Col>
    </Row>
  );
};
