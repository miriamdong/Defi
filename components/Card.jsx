/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'
const supportLinks = [
  {
    name: 'Venus Head',
    href: 'http:// Venus.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    name: 'MARS',
    href: 'Mars.com',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
  },
  {
    name: 'STAR',
    href: 'Star.com',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
  },
]

export default function Card() {
  return (
    <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="px-4 py-5 sm:px-6">
        <h3>{link.name}</h3>
       </div>
    <div className="px-4 py-5 sm:p-6">{link.description}</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Link to {link.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    // <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
    //   <div className="px-4 py-5 sm:px-6">
    //     {/* Content goes here */}
    //     {/* We use less vertical padding on card headers on desktop than on body sections */}
    //   </div>
    //   <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    //   <div className="px-4 py-4 sm:px-6">
    //     {/* Content goes here */}
    //     {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
    //   </div>
    // </div>
  )
}