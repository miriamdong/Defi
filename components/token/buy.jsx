/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  'Vitae in pulvinar odio id utobortis in inter.',
  'Sed sed id viverra viverra augue eget massa.',
  'Urna, gravida amet, a, integer venenatis.',
  'Lobortis sed pharetra amet vitae eleifend.',
  'Ullamcorper blandit a consequat donec elit aoreet.',
  'Dolor quo assumenda.',
  'Esse rerum distinctio maiores maiores.',
  'Eos enim officiis ratione.',
  'Tempore molestiae aliquid excepturi.',
  'Perspiciatis eveniet inventore eum et aliquam.',
]

export default function Buy() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="p-20 text-gray-900">Increased</span>
              <span className="text-indigo-600">$99 this week</span>
            </h1>
            <img
            className=" h-90"
            src ="/img/price.png"
            />
            
          </div>
          <a
            href="/"
            className=" w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
          >
            Invest a project
          </a>
        </div>
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Everything you need</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Buy MEOW NOW</p>
            <h1>Token Price
              <img
              src ="/img/catcoin.png"
              ></img>
            </h1>
            <h1 className="mt-8 text-indigo-500">
              USD $1000
            </h1>
          </div>
          <form action="#" method="POST" className="space-y-6">
                <div>
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
                    />
                  </div>
                  <img 
                  className="w-25 h-30"
                  src="/img/x.png"></img>
                  
                  <img 
                  src="/img/catcoin.png"></img>
                  </div>
                </div>
                

              
              
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="notification"
                      name="notification"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                      Newsletter
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Buy
                  </button>
                </div>
              </form>
        </div>
      </div>
    </div>
  )
}
