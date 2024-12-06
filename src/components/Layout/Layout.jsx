import PropTypes from "prop-types";
import styles from "./styles.module.scss";
function MainLayout({ children }) {
  const { wraplayout, container } = styles;
  return (
    <main className={wraplayout}>
      <div className={container}>{children}</div>
    </main>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
