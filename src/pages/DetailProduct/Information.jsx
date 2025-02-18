import styles from "./styles.module.scss";
function InformationProduct() {
  const { itemInfo, containerInfo, title, content } = styles;
  const dataInformation = [
    { id: 1, title: "Size", content: "S,M,L" },
    { id: 2, title: "Brand", content: "Brand 01" },
    { id: 3, title: "SKU", content: "12345" },
  ];
  return (
    <div className={containerInfo}>
      {dataInformation.map((item, index) => (
        <div key={index} className={itemInfo}>
          <div className={title}>{item.title}</div>
          <div className={content}>{item.content}</div>
        </div>
      ))}
    </div>
  );
}

export default InformationProduct;
