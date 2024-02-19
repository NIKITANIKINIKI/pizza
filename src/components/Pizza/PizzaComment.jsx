import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../redux/slice/commentsSlice";
import React from "react";

function PizzaContent({ id }) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.commentsSlice);
  const [comment, setComment] = React.useState("");

  const isComment = React.useRef(false);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      addNewComment(id, comment);
    }
  };

  const addNewComment = (id, comment) => {
    const obj = {
      id,
      comments: [comment],
    };
    dispatch(addComment(obj));
    isComment.current  = true;
  };

  return (
    <div className="pizza-block-feedback">
      <div className="pizza-block-input">
        <input
          value={comment}
          onChange={handleChange}
          placeholder="Оцените пиццу"
          type="text"
          onKeyDown={handleEnterPress}
        />
        <button onClick={() => addNewComment(id, comment)}>Отправить</button>
      </div>
      <div className="pizza-block-comments">
        <div className="pizza-block-show">
          <button onClick={() => isComment.current =!isComment.current }>
            {
              isComment.current  ? 'Скрыть комментарии' : 'Спрятать комментарии'
            }</button>
        </div>
        <ul>
          {isComment.current 
            ? comments
                .find((el) => el.id == id)
                .comments.map((el) => <li>{el}</li>)
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default PizzaContent;
