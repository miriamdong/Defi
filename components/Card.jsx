/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';
import useAppData from "../hooks/useAppData.js";

export default function Card() {

  const {state} = useAppData();

  return (
    <section
      className=" -mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8  "
      aria-labelledby="contact-heading">
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8 ">
        {state.projects.map((link) => (
          <div key={link.id} className="flex flex-col bg-white rounded-2xl shadow-xl">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="px-4 py-5 sm:px-6">
                <h3>{link.name}</h3>
                <Link href="/project/[id]" as={`/project/${link.id}`}>
                  <img src={link.image} />
                </Link>
              </div>
              <div className="px-4 py-5 sm:p-6">{link.description}</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href={link.link}
                className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                Link
              </a>
            </div>

          </div>

        ))}
<<<<<<< HEAD
        {user ? (
          <Link href="/project/create">
            <div className="flex flex-col bg-purple-900 rounded-2xl shadow-xl " style={{textAlign: "center"}}>
              <div className="flex-1 relative ">
                <div className=" px-4 py-10 sm:px-6 text-white">
                  <h3>CREATE NEW PROJECT</h3>
                </div>
                <div>
                  <img src="./img/min.gif" alt="New Project" />
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex flex-col bg-purple-900 rounded-2xl shadow-xl " onClick={()=>{
            const abc = document.getElementsByClassName("sign-in-button")
            abc[0].click()
            setToggle((prev)=>{
              return !prev
            })
          }}>
=======
        <Link href="/project/create">
        <div className="flex flex-col bg-purple-900 rounded-2xl shadow-xl ">

>>>>>>> 5992b57fba96166f3138339e2b15c7046a72e4cd
            <div className="flex-1 relative ">
              <div className=" px-4 py-10 sm:px-6 text-white">
                <h3>CREATE NEW PROJECT</h3>

              </div>
              <div  ><img
                    src="./img/min.gif"
                    alt="New Project"
              /></div>
              </div>

      </div>
       </Link>
      </div>

    </section>
  );
}