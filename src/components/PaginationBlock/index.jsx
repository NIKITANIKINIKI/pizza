import styles from "./PaginationBlock.module.scss";
import {changeCurrentPage} from "../../redux/slice/filterSlice"
import { useDispatch } from "react-redux";

function PaginationBlock({ currentPage, totalPages }) {
  const pageArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  const dispatch=useDispatch()

  return (
    <div className={styles.root}>
      <ul>
        {currentPage != 1 && (
          <li onClick={() => dispatch(changeCurrentPage(currentPage - 1))}>
            <a>&laquo;</a>
          </li>
        )}
        {pageArray.map((el) => (
          <li
            key={el}
            onClick={() => dispatch(changeCurrentPage(el))}
            className={el === currentPage ? styles.active : ""}
          >
            <a>{el}</a>
          </li>
        ))}
        {currentPage != totalPages && pageArray.length!=0 &&  (
          <li onClick={() => dispatch(changeCurrentPage(currentPage + 1))}>
            <a>&raquo;</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PaginationBlock;
