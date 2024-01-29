import styles from "./PaginationBlock.module.scss";

function PaginationBlock({ currentPage, changeCurrentPage, totalPages }) {
  const pageArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.root}>
      <ul>
        {currentPage != 1 && (
          <li onClick={() => changeCurrentPage(currentPage - 1)}>
            <a>&laquo;</a>
          </li>
        )}
        {pageArray.map((el) => (
          <li
            key={el}
            onClick={() => changeCurrentPage(el)}
            className={el === currentPage ? styles.active : ""}
          >
            <a>{el}</a>
          </li>
        ))}
        {currentPage != totalPages && pageArray.length!=0 &&  (
          <li onClick={() => changeCurrentPage(currentPage + 1)}>
            <a>&raquo;</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PaginationBlock;
