import styles from "../styles.module.scss";
import PropTypes from "prop-types";

function InfoCard({ content, description, src }) {
  const { containerCard, containerContent, title, des } = styles;
  return (
    <div className={containerCard}>
      <img width={40} height={40} src={src} alt="" />
      <div className={containerContent}>
        <div className={title}>{content}</div>
        <div className={des}>{description}</div>
      </div>
    </div>
  );
}
InfoCard.propTypes = {
  content: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
export default InfoCard;
