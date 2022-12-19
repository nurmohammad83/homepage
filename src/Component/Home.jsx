import React from "react";
import {
  FaBell,
  FaComment,
  FaEllipsisH,
  FaHeart,
  FaHome,
  FaPlus,
  FaShare,
  FaUserAlt,
} from "react-icons/fa";
const Home = () => {
  return (
    <section className="bg-slate-800 text-white">
      <div className="container w-full mx-auto">
        <div className="flex  py-5 justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Sosmad</h2>
          </div>
          <div className="flex text-4xl">
            <FaBell className="mr-2 bg-gray-700 text-white p-2 rounded-full" />
            <FaComment className="mr-2 bg-gray-700 text-white p-2 rounded-full" />
          </div>
        </div>
        <div className="">
          <h3 className="text-xl">Stories</h3>
          <div className="grid grid-cols-2  gap-3">
            <div className="relative h-52 w-44 rounded-3xl mx-auto">
              <img
                className="h-full w-full rounded-3xl"
                src="https://i.ibb.co/3WpWp92/biodiversity-shutterstock-1477256246-jpg.webp"
                alt=""
              />

              <div className="absolute opacity-75 rounded-xl font-medium  bottom-0 rounded-b-xl bg-slate-500 w-full">
                <img
                  className="w-8 h-8 mx-auto relative bottom-4 rounded-full"
                  src="https://i.ibb.co/k5cXdvR/businessman-character-avatar-isolated-24877-60111.webp"
                  alt=""
                />
                <h6 className="text-center bottom-1 relative text-sm">
                  Adison Mango
                </h6>
              </div>
            </div>
            <div className="relative h-52 w-44 rounded-3xl mx-auto">
              <img
                className="h-full w-full rounded-3xl"
                src="https://i.ibb.co/3WpWp92/biodiversity-shutterstock-1477256246-jpg.webp"
                alt=""
              />

              <div className="absolute opacity-75 rounded-xl font-medium -z-1 bottom-0 rounded-b-xl bg-slate-500 w-full">
                <img
                  className="w-8 h-8 mx-auto relative bottom-4 rounded-full"
                  src="https://i.ibb.co/k5cXdvR/businessman-character-avatar-isolated-24877-60111.webp"
                  alt=""
                />
                <h6 className="text-center bottom-1 relative text-sm">
                  Adison Mango
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-slate-700 p-1 mt-8 rounded-3xl">
          <button className="bg-blue-600 py-2 font-medium rounded-3xl text-center w-full">
            Explore
          </button>
          <button className="py-2 text-center font-medium rounded-3xl w-full">
            Explore
          </button>
        </div>
        <div className="w-full mb-9 my-8 bg-slate-700 rounded-xl">
          <div className="rounded-md  shadow-md">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center space-x-2">
                <img
                  src="https://i.ibb.co/WBTz8t6/julian-wan-WNo-Ln-Jo7t-S8-unsplash-1.jpg"
                  alt=""
                  className=" border-blue-600 border-2 w-9 h-9 rounded-full shadow-sm "
                />
                <div className="-space-y-1">
                  <h2 className="text-sm font-bold leading-none">
                    Ahmed Dorwart
                  </h2>
                  <p className="inline-block text-xs leading-non">10 min ago</p>
                </div>
              </div>
              <button className="bg-slate-600 rounded-full p-3">
                <FaEllipsisH />
              </button>
            </div>
            <img
              src="https://i.ibb.co/ZYdVrvt/photo-1636955735635-b4c0fd54f360.jpg"
              alt=""
              className=" w-full h-60"
            />
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button className="flex items-center justify-center">
                    <FaHeart />
                  </button>
                  <button className="flex items-center justify-center">
                    <FaComment />
                  </button>
                  <button className="flex items-center justify-center">
                    <FaShare />
                  </button>
                </div>
              </div>
              <div className="flex items-center pt-3 pb-1">
                <p className="mr-3">
                  <span className="font-bold">229</span> Likes
                </p>
                <p>
                  <span className="font-bold">229</span> Comments
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-lg">
                  <span className="text-base font-bold">Amat Pauji</span> Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Non,
                  iusto.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 shadow-xl mt-6 bg-slate-700 py-5 rounded-t-xl">
          <div className="flex justify-around relative">
            <button>
              <FaHome className="bg-slate-600 p-2 w-9 h-9 rounded-full" />
            </button>
            <button>
              <FaUserAlt />
            </button>
          </div>
          <p className="absolute text-center -top-4 bg-blue-600 flex justify-center items-center shadow-lg rounded-full left-1/2 w-12  h-12">
            <FaPlus />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
