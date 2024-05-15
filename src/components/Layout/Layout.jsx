import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={css.navigationWrapper}>
      <ul className={css.navigationList}>
        <li className={css.navigationItem}>
          <NavLink
            to={"/"}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            List
          </NavLink>
        </li>
        <li className={css.navigationItem}>
          <NavLink
            to={"/bucket"}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            Bucket
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
