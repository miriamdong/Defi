/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
import Token from "../Meta/Token";
import Chart from "../Meta/Chart";
const features = [
  "Vitae in pulvinar odio id utobortis in inter.",
  "Sed sed id viverra viverra augue eget massa.",
  "Urna, gravida amet, a, integer venenatis.",
  "Lobortis sed pharetra amet vitae eleifend.",
  "Ullamcorper blandit a consequat donec elit aoreet.",
  "Dolor quo assumenda.",
  "Esse rerum distinctio maiores maiores.",
  "Eos enim officiis ratione.",
  "Tempore molestiae aliquid excepturi.",
  "Perspiciatis eveniet inventore eum et aliquam.",
];

export default function Buy() {
  return (
    <div className="bg-white pb-40">
      <div className="max-w-7xl mx-auto sm:py-5 sm:px-8 lg:px-4">
        <div className="xl:grid xl:grid-cols-2 ">
          <div className="pt-0">
            {/* <p className="mt-2 text-3xl font-extrabold text-gray-900">Buy MEOW NOW</p>
            <h1>Token Price</h1>
            <h1 className="mt-8 text-indigo-500">USD $1000</h1> */}
            <Chart />
            <div className="pt-10">
            <a
            href="/"
            className=" bg-indigo-600 border border-transparent px-5 py-2 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0">
            Invest a project
          </a>
          </div>
          </div>
          <div className="">
            {/* <div>
              <label htmlFor="token" className="block text-sm font-medium text-gray-700">
                How many do you want?
              </label>
              <div className="flex flex-row">
                <div className=" ">
                  <textarea
                    id="token"
                    name="token"
                    type="token"
                    required
                    className="appearance-none block w-60 px-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-8xl"
                  /> */}

            {/* </div> */}
            <div className="xl:grid xl:grid-cols-2 xl:gap-x-8 py-10 h-40">
              <div>
            <h1>Token Price</h1>
            <h1 className="text-indigo-500">USD $1000</h1>
            </div>
            <img 
              className="h-2/4"
            src="/img/catcoin.png"></img>
            </div>
            <Token />
            
            {/* <img className="w-25 h-30" src="/img/x.png"></img> */}

            {/* <div className="flex items-center justify-between"> */}
              {/* <div className="flex items-center"> */}
                {/* <input
                  id="notification"
                  name="notification"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                /> */}
                {/* <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Newsletter
                </label>{" "} */}
              {/* </div> */}
              {/* <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"></a>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
