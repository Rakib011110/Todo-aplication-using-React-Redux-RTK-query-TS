import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center text-3xl font-semibold my-10"> My Todo</h1>

        <TodoContainer />
      </Container>
    </div>
  );
};

export default Todo;
