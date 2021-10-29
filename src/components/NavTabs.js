import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";



export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  
                 
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    className=
                  "border-indigo-500  text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    
                  >
                    About
                  </a>
                  <a
                    href="#Project"
                    onClick={() => handlePageChange("Project")}
                    className= "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    
                  >
                    Projects
                  </a>
                  <a
                    href="#Resume"
                    onClick={() => handlePageChange("Resume")}
                    className= "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    
                  >
                    Resume
                  </a>
                  <a
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    className= "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="./images/anthony_zamora_shot.jpg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"></Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#About"
                onClick={() => handlePageChange("About")}
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
               About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Project"
                onClick={() => handlePageChange("Project")}
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Resume
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Contact"
                onClick={() => handlePageChange("Contact")}
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://previews.dropbox.com/p/thumb/ABXmPYTktAMKSYdqOSJF0q5pf7TdmTpi3Oznkc3DLBSLKwH9rHcP3NXXsuSRoVNPw2O3gw_eQzj3z6KSZoG1KkHWLViEFpJ9u4QrngG5ErwK78ucQWPu6pDdKwrgW_FNhWGewo28ExHtYfoI9lilS82ah7ffh-uITqxRiCZCo7BqbFbNsVCdKwYCzKfRP_GI9wqrOHunHrWavbRAAAMDkoofbFtUeNlBhH2LAcBYAzh248NFLVfHX6oWF9LredyO_t0jJ-9O9n_f3bQHc2D-rrz1BU74WbrfgjlUe03D9Bsu4A_n5CxMbTKKb5pLQ0QIkSLNAFoLfVnfeXrsY04Ud-d88nIGkcQKe1j2oM8MPwZiRQ/p.jpeg?size=2048x1536&size_mode=3"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Anthony Zamora
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    anthony.zamora@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
