export const IncompleteArea = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未処理のTodo</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo}>
              <li className="list-row">
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
