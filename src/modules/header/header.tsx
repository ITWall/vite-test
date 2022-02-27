import React, { FC, useState } from "react";
import cs from "classnames";
export const Header: FC = () => {
  const [tab, setTab] = useState<number>(1);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row bg-black text-white h-12 items-stretch fixed top-0 left-0 w-full z-50">
        <div className="flex-grow hover:bg-gray-600 flex justify-center items-center">
          HOME
        </div>
        <div className="flex-grow hover:bg-gray-600 flex justify-center items-center">
          ABOUT
        </div>
        <div className="flex-grow hover:bg-gray-600 flex justify-center items-center">
          MENU
        </div>
        <div className="flex-grow hover:bg-gray-600 flex justify-center items-center">
          WHERE
        </div>
      </div>
      <div className="w-full h-screen*3/4 bg-[url('/src/assets/poster/coffeehouse.jpg')] bg-no-repeat bg-cover bg-center z-10 grayscale-50 block">
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
          <span className="font-bold text-6xl text-white font-serif">
            The
            <br />
            <br /> Cafe
          </span>
        </div>
        <div className="absolute bottom-4 left-4 bg-black text-white p-1 text-sm">
          Open from 6am to 5pm
        </div>
        <div className="absolute bottom-4 right-4 text-white p-1 text-sm">
          15 Adr street, 5015
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/5 h-96 bg-blue-50" />
        <div className="w-3/5 bg-green-500">
          <div>
            <div className="h-48 flex items-center justify-center">
              <span className="bg-black text-white p-1 tracking-[0.3rem]">
                ABOUT THE CAFE
              </span>
            </div>
            <div className="leading-relaxed text-justify">
              <span>
                The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </span>
              <br />
              <br />
              <span>
                In addition to our full espresso and brew bar menu, we serve
                fresh made-to-order breakfast and lunch sandwiches, as well as a
                selection of sides and salads and other good stuff.
              </span>
              <br />
              <br />
              <div className="bg-gray-400 border-l-8 border-l-violet-800 p-4">
                <span>
                  <i>
                    "Use products from nature for what it's worth - but never
                    too early, nor too late." Fresh is the new sweet.
                  </i>
                </span>
                <br />
                <br />
                <span>Chef, Coffeeist and Owner: Liam Brown</span>
              </div>
            </div>
            <br />
            <br />
            <img src="/src/assets/poster/coffeeshop.jpg" />
            <br />
            <span>
              <strong>Opening hours: </strong>
              everyday from 6am to 5pm.
            </span>
            <br />
            <br />
            <span>
              <strong>Address: </strong>
              15 Adr street, 5015, NY
            </span>
          </div>

          <div>
            <div className="h-48 flex items-center justify-center">
              <span className="bg-black text-white p-1 tracking-[0.3rem]">
                THE MENU
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row h-10 border-2 border-gray-500 shadow-2xl cursor-pointer">
                <div className={cs("flex-grow flex justify-center items-center hover:bg-gray-600 hover:text-white", tab===1 ? "bg-gray-600 text-white" : "")} onClick={()=>{setTab(1)}}>
                  Eat
                </div>
                <div className={cs("flex-grow flex justify-center items-center hover:bg-gray-600 hover:text-white", tab===2 ? "bg-gray-600 text-white" : "")} onClick={()=>{setTab(2)}}>
                  Drink
                </div>
              </div>
              <div className={tab === 1 ? "" : "hidden"}>
                CONTENT SOMETHING 1
              </div>
              <div className={tab === 2 ? "" : "hidden"}>
                CONTENT SOMETHING 2
              </div>
            </div>
            <div className="leading-relaxed text-justify">
              <span>
                The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </span>
              <br />
              <br />
              <span>
                In addition to our full espresso and brew bar menu, we serve
                fresh made-to-order breakfast and lunch sandwiches, as well as a
                selection of sides and salads and other good stuff.
              </span>
              <br />
              <br />
              <div className="bg-gray-400 border-l-8 border-l-violet-800 p-4">
                <span>
                  <i>
                    "Use products from nature for what it's worth - but never
                    too early, nor too late." Fresh is the new sweet.
                  </i>
                </span>
                <br />
                <br />
                <span>Chef, Coffeeist and Owner: Liam Brown</span>
              </div>
            </div>
            <br />
            <br />
            <img src="/src/assets/poster/coffeeshop.jpg" />
            <br />
            <span>
              <strong>Opening hours: </strong>
              everyday from 6am to 5pm.
            </span>
            <br />
            <br />
            <span>
              <strong>Address: </strong>
              15 Adr street, 5015, NY
            </span>
          </div>
        </div>
        <div className="w-1/5 bg-orange-500" />
      </div>
    </div>
  );
};
