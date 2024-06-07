import DefaultLayout from "@/layouts/default";
// import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

const TestPage = () => {
  return (
    <>
      <DefaultLayout>
        {" "}
        <div className="justify-center items-center flex flex-col w-[100%] text-black font-sans todo-list">
          <div className="p-5 text-4xl text-white font-sans">TO DO LIST</div>
          <div className=" flex justify-center items-center w-full  p-5">
            {" "}
            <title>Task</title>
            <input
              type="text"
              id="task"
              name="task"
              placeholder="Enter task to do"
              className="w-[50%] px-4 py-2 mr-2 rounded-xl
              border-gray-300 focus:outline-none
               focus:lue-500 text-white"
            />
            <Button className=" text-black font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Add Task
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3  w-full p-3">
            <div className=" font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 flex flex-col justify- items-center rounded-[1rem]">
              <h1 className="font-bold text-2xl">All Tasks</h1>
              <br />
              <div className="">
                <div className=" flex justify-between items-center mb-2">
                  <Checkbox className=" border-gray-200 flex items-center py-4">
                    At least 8 characters long{" "}
                  </Checkbox>
                  <div className="ml-3 flex">
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-red-500 mr-1"
                    >
                      <Image width={24} src="./deleteIcon.svg" />
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-green-500"
                    >
                      <Image width={24} src="./editIcon.svg" />
                    </Button>
                  </div>
                </div>
                <div className=" flex justify-between items-center mb-2">
                  <Checkbox className=" border-gray-200 flex items-center py-4">
                    At least one lowercase character{" "}
                  </Checkbox>
                  <div className="ml-3 flex">
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-red-500 mr-1"
                    >
                      <Image width={24} src="./deleteIcon.svg" />
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-green-500"
                    >
                      <Image width={24} src="./editIcon.svg" />
                    </Button>
                  </div>
                </div>
                <div className=" flex justify-between items-center mb-2">
                  <Checkbox className=" border-gray-200 flex items-center py-4">
                    Inclusion of at one special character{" "}
                  </Checkbox>
                  <div className="ml-3 flex">
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-red-500 mr-1"
                    >
                      <Image width={24} src="./deleteIcon.svg" />
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-green-500"
                    >
                      <Image width={24} src="./editIcon.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 flex flex-col justify- items-center rounded-[1rem]">
              <h1 className="font-bold text-2xl">Incomplete Tasks</h1>
              <br />
              <div className="">
                <div className=" flex justify-between items-center mb-2">
                  <Checkbox className=" border-gray-200 flex items-center py-4">
                    At least 8 characters long{" "}
                  </Checkbox>
                  <div className="ml-3 flex">
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-red-500 mr-1"
                    >
                      <Image width={24} src="./deleteIcon.svg" />
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-green-500"
                    >
                      <Image width={24} src="./editIcon.svg" />
                    </Button>
                  </div>
                </div>
                <div className=" flex justify-between items-center mb-2">
                  <Checkbox className=" border-gray-200 flex items-center py-4">
                    At least one lowercase character{" "}
                  </Checkbox>
                  <div className="ml-3 flex">
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-red-500 mr-1"
                    >
                      <Image width={24} src="./deleteIcon.svg" />
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-green-500"
                    >
                      <Image width={24} src="./editIcon.svg" />
                    </Button>
                  </div>
                </div>
                <div className=" flex justify-between items-center mb-2">
                  <Checkbox className=" border-gray-200 flex items-center py-4">
                    Inclusion of at one special character{" "}
                  </Checkbox>
                  <div className="ml-3 flex">
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-red-500 mr-1"
                    >
                      <Image width={24} src="./deleteIcon.svg" />
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-green-500"
                    >
                      <Image width={24} src="./editIcon.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 flex flex-col justify- items-center rounded-[1rem]">
              <div className="font-bold text-2xl">Complete Tasks</div>
              <br />
              <div className="">
                <div className=" flex justify-between items-center mb-2">
                  <Checkbox className=" border-gray-200 flex items-center py-4">
                    At least 8 characters long{" "}
                  </Checkbox>
                  <div className="ml-3 flex">
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-red-500 mr-1"
                    >
                      <Image width={24} src="./deleteIcon.svg" />
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-green-500"
                    >
                      <Image width={24} src="./editIcon.svg" />
                    </Button>
                  </div>
                </div>
                <div className=" flex justify-between items-center mb-2">
                  <Checkbox className=" border-gray-200 flex items-center py-4">
                    At least one lowercase character{" "}
                  </Checkbox>
                  <div className="ml-3 flex">
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-red-500 mr-1"
                    >
                      <Image width={24} src="./deleteIcon.svg" />
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-green-500"
                    >
                      <Image width={24} src="./editIcon.svg" />
                    </Button>
                  </div>
                </div>
                <div className=" flex justify-between items-center mb-2">
                  <Checkbox className=" border-gray-200 flex items-center py-4">
                    Inclusion of at one special character{" "}
                  </Checkbox>
                  <div className="ml-3 flex">
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-red-500 mr-1"
                    >
                      <Image width={24} src="./deleteIcon.svg" />
                    </Button>
                    <Button
                      isIconOnly
                      className="border-2 border-black bg-white hover:bg-green-500"
                    >
                      <Image width={24} src="./editIcon.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default TestPage;
