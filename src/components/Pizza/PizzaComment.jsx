function PizzaContent() {
  return (
    <div className="pizza-block-feedback">
      <div className="pizza-block-comments">
        <div className='pizza-block-show'>
          <button>Показать комментарии</button>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
      <div className="pizza-block-input">
        <input placeholder="Оцените пиццу" type="text" />
        <button>Отправить</button>
      </div>
    </div>
  );
}

export default PizzaContent;
