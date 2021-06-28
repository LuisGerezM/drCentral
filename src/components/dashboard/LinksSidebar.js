import { Button } from "bootstrap";
import { NavLink } from "react-router-dom";

const LinksSidebar = ({ routes, url }) => {
  return (
    <>
      {routes.map((item, key) => {
        return (
          <NavLink
            to={`${url}/${item.url}`}
            key={key}
            activeClassName="active-link"
            replace
            style={{
              textDecoration: "none",
              textAlign: "start",
              height: "4rem",
              padding: "20px",
            }}
          >
            {" "}
            <p className="item-name ml-md-4 ">{item.name}</p>{" "}
          </NavLink>
        );
      })}
    </>
  );
};

export default LinksSidebar;
