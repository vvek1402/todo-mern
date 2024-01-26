"use client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const [todo, setTodo] = useState<string>("");
  const [allTodos, setAllTodos] = useState<any>([]);
  const [error, setErrors] = useState<any>();

  const storeTodo = () => {
    const data = {
      todo: todo,
      status: "ACTIVE",
    };
    axios
      .post(api_url + "todo", data)
      .then((res) => {
        toast.success(res.data.msg);
        setTodo("");
        getAllTodos();
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  const getAllTodos = useCallback(() => {
    axios
      .get(api_url + "getalltodos")
      .then((res) => {
        setAllTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getAllTodos();
  }, []);

  const deleteTodo = (id: string) => {
    axios
      .delete(api_url + "delete/" + id)
      .then((res) => {
        toast.success(res.data.msg);
        setTodo("");
        getAllTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTodo = (id: string, status: string) => {
    const newStatus = status === "ACTIVE" ? "COMPLETED" : "ACTIVE";
    const data = { status: newStatus };

    axios
      .put(api_url + "update/" + id, data)
      .then((res) => {
        toast.success(res.data.msg);
        setTodo("");
        getAllTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-100 pt-8">
        <div className="bg-white p-3 max-w-md mx-auto">
          <div className="text-center">
            <h1 className="text-3xl text-black font-bold">To Do App</h1>
            <div className="mt-4 flex">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-black"
                type="text"
                placeholder="Enter your task here"
                value={todo}
                onChange={(e) => {setTodo(e.target.value) , setErrors(null)}}
              />
              <button
                onClick={() => storeTodo()}
                className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
              >
                <svg
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="12" r="9" />{" "}
                  <line x1="9" y1="12" x2="15" y2="12" />{" "}
                  <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
                <span>Add</span>
              </button>
            </div>
          </div>
          {error && <p className="italic text-red-700"> {error[0].msg}</p>}

          <div className="mt-8">
            <ul>
              {allTodos.map((value: any, index: number) => (
                <li className="p-2 rounded-lg" key={index}>
                  <div className="flex align-middle flex-row justify-between">
                    <div className="p-2">
                      <input
                        type="checkbox"
                        className="h-6 w-6"
                        value="true"
                        id={value._id}
                        checked={value.status === "COMPLETED"}
                        onChange={() => updateTodo(value._id, value.status)}
                      />
                    </div>
                    <div className="p-2">
                      <p
                        className={
                          value.status == "COMPLETED"
                            ? "text-lg text-gray-500 line-through "
                            : "text-lg text-black"
                        }
                      >
                        {value.todo}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteTodo(value._id)}
                      className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
                    >
                      <svg
                        className="h-6 w-6 text-red-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        {" "}
                        <circle cx="12" cy="12" r="10" />{" "}
                        <line x1="15" y1="9" x2="9" y2="15" />{" "}
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                    </button>
                  </div>
                  <hr className="mt-2" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
