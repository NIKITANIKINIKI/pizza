import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../redux/slice/commentsSlice";
import React from "react";

function PizzaContent({ id }) {
  const dispatch = useDispatch();
  const listOfcomments = useSelector((state) =>
    state.commentsSlice.comments.find((el) => el.id == id)
  );
  const [comment, setComment] = React.useState("");

  const [stateButton, changeStateButton] = React.useState(false);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      addNewComment(id, comment);
    }
  };

  const addNewComment = (id, comment) => {
    if (comment.replace(/\s/g, "").length !== 0) {
      const obj = {
        id,
        comments: [comment],
      };
      dispatch(addComment(obj));
      changeStateButton(true);
    }
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
          {listOfcomments && (
            <button onClick={() => changeStateButton(!stateButton)}>
              {stateButton ? "Спрятать комментарии" : "Показать комментарии"}
            </button>
          )}
        </div>
        <ul>
          {stateButton
            ? listOfcomments.comments.map((el) => <li>{el}</li>)
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default PizzaContent;
