export const CompleteArea = (props) => {
  const { completeTodos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTodo</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo}>
              <li className="list-row">
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClick(index);
                  }}
                >
                  戻す
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
