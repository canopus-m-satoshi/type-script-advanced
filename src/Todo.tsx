import { TodoType } from './types/toso';

export const Todo = (
  // props: Pick<TodoType, 'userId' | 'title' | 'completed'>, PICkで必要な情報のみ抽出
  props: Omit<TodoType, 'id'>, // Omitで不要な情報を除く
) => {
  const { title, userId, completed = false } = props;
  const comoletMark = completed ? '[完]' : '[未]';

  return <p>{`${comoletMark}${title}(ユーザー:${userId})`}</p>;
};
