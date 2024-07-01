import TodoFilter from "@/redux/TodoFilter";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { useGetTodoQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // * From Local State
  // const { todos } = useAppSelector((state) => state.todos);

  //* from server
  const { data: todos, isLoading } = useGetTodoQuery(undefined);
  console.log(todos);
  if (isLoading) {
    return <p>LOADING </p>;
  }

  return (
    <div>
      <div className=" flex justify-between mb-5">
        <AddTodoModal />

        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]  ">
        <div className="bg-white p-5 w-full rounded-xl space-y-4">
          {/* <TodoCard /> */}

          {todos?.data?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>

        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
