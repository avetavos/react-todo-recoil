export default interface Todo {
  id: string | number;
  title: string;
  completed: boolean;
  userId?: number;
}
