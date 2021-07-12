type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const comoletMark = completed ? '[完]' : '[未]';

  return <p>{`${comoletMark}${title}(ユーザー:${userId})`}</p>;
};
