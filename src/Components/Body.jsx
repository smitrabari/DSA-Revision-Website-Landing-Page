import { LuBookOpenCheck } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import { IoMdBook } from "react-icons/io";
import { RiTargetFill } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdDataArray } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { GoStack } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { LuTreePine } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import { TbMathFunction } from "react-icons/tb";
import { Code } from "lucide-react";
import React from "react";

const Body = () => {
  const topics = [
    "Arrays",
    "Linked List",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
    "DP",
    "Sorting",
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center px-6 md:px-20 py-10">
        <div className="p-6 order-1">
          <button className="text-blue-600 font-bold bg-gray-200 px-3.5 py-0.5 rounded-full items-center flex gap-2 text-1xl mb-2 bg-opacity-10">
            <LuBookOpenCheck />
            Your DSA Revision Companion
          </button>
          <h1 className="text-8xl font-jakarta font-bold">
            Master DSA One <span className="text-blue-700">Revision</span> at a
            Time.
          </h1>
          <p className="text-gray-500 font-jakarta text-lg">
            Well-structured notes, curated problems, and smart revision tools to
            help you crack coding interviews.
          </p>
          <div className="flex flex-row gap-2.5">
            <button className="font-jakarta font-bolds shadow-lg bg-blue-600 text-white text-1xl p-4 rounded-lg items-center flex gap-2 mt-4">
              <a href="#">Start Revision</a> <FaArrowRightLong />
            </button>
            <button className="font-jakarta font-bold shadow-lg border text-1xl px-6 py-3.5 rounded-lg items-center flex gap-2 mt-4">
              <a href="#">Browse Topics</a>
            </button>
          </div>
          <div className="flex flex-row py-3">
            <ul className="flex gap-5">
              <li className="flex gap-1 items-center">
                <IoMdCheckmarkCircleOutline />
                Beginner Frendly
              </li>
              <li className="flex gap-1 items-center">
                <IoMdCheckmarkCircleOutline />
                Interview Focused
              </li>
              <li className="flex gap-1 items-center">
                <IoMdCheckmarkCircleOutline />
                Always Free
              </li>
            </ul>
          </div>
        </div>
        <div className="order-2">
          <div className="relative flex items-center justify-center py-20">
            {/* Decorative background blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-2xl opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-70"></div>

            {/* Main card */}
            <div className="relative flex bg-[#0d1117] rounded-2xl shadow-2xl overflow-hidden w-850px">
              {/* Sidebar */}
              <div className="bg-[#161b22] w-48 p-6 flex flex-col gap-5">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-gray-300 text-sm hover:text-white cursor-pointer"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Code panel */}
              <div className="flex-1 flex flex-col">
                {/* Top bar with traffic lights */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-gray-500 text-sm">{"</>"}</span>
                </div>

                {/* Code content */}
                <pre className="p-6 text-sm leading-7 overflow-x-auto font-mono">
                  <code>
                    <span className="text-gray-500">// Example: Two Sum</span>
                    {"\n"}
                    <span className="text-sky-400">vector</span>
                    {"<"}
                    <span className="text-sky-400">int</span>
                    {"> "}
                    <span className="text-yellow-300">twoSum</span>(
                    <span className="text-sky-400">vector</span>
                    {"<"}
                    <span className="text-sky-400">int</span>
                    <span className="text-gray-300">{">& "}nums, </span>
                    <span className="text-sky-400">int</span>
                    <span className="text-gray-300"> target) {"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-sky-400">unordered_map</span>
                    {"<"}
                    <span className="text-sky-400">int</span>,{" "}
                    <span className="text-sky-400">int</span>
                    {"> "}
                    <span className="text-gray-300">mp;</span>
                    {"\n\n"}
                    {"  "}
                    <span className="text-purple-400">for</span> (
                    <span className="text-sky-400">int</span>{" "}
                    <span className="text-gray-300">i = 0; i</span> {"<"}{" "}
                    <span className="text-gray-300">nums.size(); i++)</span>{" "}
                    {"{"}
                    {"\n"}
                    {"    "}
                    <span className="text-sky-400">int</span>{" "}
                    <span className="text-gray-300">
                      rem = target - nums[i];
                    </span>
                    {"\n"}
                    {"    "}
                    <span className="text-purple-400">if</span>{" "}
                    <span className="text-gray-300">(mp.count(rem))</span>
                    {"\n"}
                    {"      "}
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-gray-300">
                      {"{"}mp[rem], i{"}"};
                    </span>
                    {"\n"}
                    {"    "}
                    <span className="text-gray-300">mp[nums[i]] = i;</span>
                    {"\n"}
                    {"  "}
                    {"}"}
                    {"\n"}
                    {"}"}
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-gray-300">
                      {"{"}
                      {"}"};
                    </span>
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-25 border-2 border-gray-300 rounded-3xl py-6 mx-20 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 rounded-full p-1">
            <TiDocumentText className="text-5xl text-blue-700" />
          </div>
          <p className="leading-tight font-jakarta font-bold">
            <span className="text-2xl text-blue-700">450+</span> <br /> Problems
          </p>
        </div>
        <div className="h-12 w-px bg-gray-300"></div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 rounded-full p-1">
            <IoMdBook className="text-5xl text-blue-700" />
          </div>
          <p className="leading-tight font-jakarta font-bold">
            <span className="text-2xl text-blue-700">120+</span> <br /> Revision
            Notes
          </p>
        </div>
        <div className="h-12 w-px bg-gray-300"></div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 rounded-full p-1">
            <RiTargetFill className="text-5xl text-blue-700" />
          </div>
          <p className="leading-tight font-jakarta font-bold">
            <span className="text-2xl text-blue-700">8</span> <br /> Core Topics
          </p>
        </div>
        <div className="h-12 w-px bg-gray-300"></div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 rounded-full p-1">
            <HiMiniUserGroup className="text-5xl text-blue-700" />
          </div>
          <p className="leading-tight font-jakarta font-bold">
            <span className="text-2xl text-blue-700">10K+</span> <br /> Happy
            Learners
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-center">
          <p className="text-4xl font-jakarta font-bold">Explore DSA Topics</p>
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-jakarta font-bold text-gray-700">
            Choose a topic and start your revision journey.
          </p>
        </div>
      </div>
      <div class="flex justify-around px-20 py-5">
      <div className="flex border-2 border-gray-400 p-10 shadow-2xs rounded-2xl gap-2">
        <div>
            <MdDataArray  className="text-6xl bg-emerald-200 text-emerald-600 rounded-sm p-2" />
          </div>
          <div>
            <div>
              <p className="leading-tight font-jakarta font-bold text-3xl">Arrays</p>
            </div>
            <div>
              <span className="leading-tight font-jakart text-md">
                Learn arrays and
                <br />
                problem solving
                <br />
                techniques.
              </span>
            </div>
          </div>
          <div className="mt-20 mx-2 justify-end">
              <FaArrowRightLong className="text-2xl"/>
          </div>
        </div>
        <div className="flex border-2 border-gray-400 p-10 shadow-2xs rounded-2xl gap-2">
        <div>
            <FaLink  className="text-6xl bg-blue-200 text-blue-600 rounded-sm p-2" />
          </div>
          <div>
            <div>
              <p className="leading-tight font-jakarta font-bold text-3xl">Linked List</p>
            </div>
            <div>
              <span className="leading-tight font-jakart text-md">
                Singly, doubly,
                <br />
                circular linked lists
                <br />
                and problems.
              </span>
            </div>
          </div>
          <div className="mt-20 mx-2 justify-end">
              <FaArrowRightLong className="text-2xl"/>
          </div>
        </div>
        <div className="flex border-2 border-gray-400 p-10 shadow-2xs rounded-2xl gap-2">
        <div>
            <GoStack  className="text-6xl bg-violet-200 text-voilet-600 rounded-sm p-2" />
          </div>
          <div>
            <div>
              <p className="leading-tight font-jakarta font-bold text-3xl">Stack</p>
            </div>
            <div>
              <span className="leading-tight font-jakart text-md">
                Understand stack
                <br />
                concepts and solve
                <br />
                classic problems.
              </span>
            </div>
          </div>
          <div className="mt-20 mx-2 justify-end">
              <FaArrowRightLong className="text-2xl"/>
          </div>
        </div>
        <div className="flex border-2 border-gray-400 p-10 shadow-2xs rounded-2xl gap-2">
        <div>
            <GoTrophy  className="text-6xl bg-orange-200 text-orange-600 rounded-sm p-2" />
          </div>
          <div>
            <div>
              <p className="leading-tight font-jakarta font-bold text-3xl">Queue</p>
            </div>
            <div>
              <span className="leading-tight font-jakart text-md">
                Explore queues,
                <br />
                deque and priority
                <br />
                queue concepts.
              </span>
            </div>
          </div>
          <div className="mt-20 mx-2 justify-end">
              <FaArrowRightLong className="text-2xl"/>
          </div>
        </div>
      </div>
      <div class="flex justify-around px-20">
      <div className="flex border-2 border-gray-400 p-10 shadow-2xs rounded-2xl gap-2">
        <div>
            <LuTreePine  className="text-6xl bg-green-200 text-green-600 rounded-sm p-2" />
          </div>
          <div>
            <div>
              <p className="leading-tight font-jakarta font-bold text-3xl">Trees</p>
            </div>
            <div>
              <span className="leading-tight font-jakart text-md">
                Binary trees, BST,
                <br />
                traversals and
                <br />
                applications.
              </span>
            </div>
          </div>
          <div className="mt-20 mx-2 justify-end">
              <FaArrowRightLong className="text-2xl"/>
          </div>
        </div>
        <div className="flex border-2 border-gray-400 p-10 shadow-2xs rounded-2xl gap-2">
        <div>
            <BsGraphUp  className="text-6xl bg-rose-200 text-rose-600 rounded-sm p-2" />
          </div>
          <div>
            <div>
              <p className="leading-tight font-jakarta font-bold text-3xl">Graphs</p>
            </div>
            <div>
              <span className="leading-tight font-jakart text-md">
                BFS, DFS, shortest
                <br />
                path and more
                <br />
                graph algorithms.
              </span>
            </div>
          </div>
          <div className="mt-20 mx-2 justify-end">
              <FaArrowRightLong className="text-2xl"/>
          </div>
        </div>
        <div className="flex border-2 border-gray-400 p-10 shadow-2xs rounded-2xl gap-2">
        <div>
            <VscSettings  className="text-6xl bg-amber-200 text-amber-600 rounded-sm p-2" />
          </div>
          <div>
            <div>
              <p className="leading-tight font-jakarta font-bold text-3xl">Sorting</p>
            </div>
            <div>
              <span className="leading-tight font-jakart text-md">
                Sorting algorithms
                <br />
                cand their real-world
                <br />
                use cases.
              </span>
            </div>
          </div>
          <div className="mt-20 mx-2 justify-end">
              <FaArrowRightLong className="text-2xl"/>
          </div>
        </div>
        <div className="flex border-2 border-gray-400 p-10 shadow-2xs rounded-2xl gap-2">
        <div>
            <TbMathFunction  className="text-6xl bg-cyan-200 text-cyan-600 rounded-sm p-2" />
          </div>
          <div>
            <div>
              <p className="leading-tight font-jakarta font-bold text-3xl">Dynamic</p>
            </div>
            <div>
              <span className="leading-tight font-jakart text-md">
                Solve complex
                <br />
                problems with DP
                <br />
                patterns.
              </span>
            </div>
          </div>
          <div className="mt-20 mx-2 justify-end">
              <FaArrowRightLong className="text-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
