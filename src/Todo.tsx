import { VFC } from 'react';
import { TodoType } from './types/toso';

export const Todo: VFC<Omit<TodoType, 'id'>> = (props) => {
  const { title, userId, completed = false } = props;
  const comoletMark = completed ? '[完]' : '[未]';

  return <p>{`${comoletMark}${title}(ユーザー:${userId})`}</p>;
};
