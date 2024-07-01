import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
// import { useAppDispatch } from "@/redux/Hook";
import { useAddTodoMutation } from "@/redux/api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescripton] = useState("");
  const [priority, setPriority] = useState("");
  console.log(priority);
  // ! for local state
  // const dispatch = useAppDispatch();

  //* for server
  //? [actualFunctionForPost {isLoading, isError, isSuccess}]
  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();

  console.log({ data, isLoading, isError, isSuccess });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      // id: randomString,
      title: task,
      description,
      isCompleted: false,
      priority,
    };

    //! for local state
    // dispatch(addTodo(taskDetails));

    //* for server
    addTodo(taskDetails);
    console.log("inside model", taskDetails);
  };

  return (
    <div>
      <h1>Add To Do Modal</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary-gradient">Add Todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle> Add Task </DialogTitle>
            <DialogDescription>
              Add your task that want to finish
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} action="">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescripton(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Priority</Label>
                <Select onValueChange={(value) => setPriority(value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Priority</SelectLabel>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
