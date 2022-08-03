import { Link } from "gatsby"
import React from "react"

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

// TODO fix nav states
const navigation = [
    // { name: 'Where Do I Start', to: '#', current: false },
    { name: 'National Resources', to: '#', current: false },
    { name: 'Local Resources', to: '#', current: false },
    { name: 'Blogs ', to: '/blog', current: false },
    { name: 'Give', to: '#', current: false },
    { name: 'About Us', to: '/about', current: false },

]
const userNavigation = [
    { name: 'Your Profile', to: '#' },
    { name: 'Settings', to: '#' },
    { name: 'Sign out', to: '/sign-in' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

    return (
        <Disclosure as="header" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                        <div className="relative h-16 flex justify-between">
                            <div className="relative z-10 px-2 flex lg:px-0">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to="/"> <svg alt="Workflow" width="127" height="25" viewBox="0 0 127 25" className="block h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.06818 0.727272V24H0.556818V0.727272H4.06818ZM9.18182 0.727272H13.4432L20.8523 18.8182H21.125L28.5341 0.727272H32.7955V24H29.4545V7.15909H29.2386L22.375 23.9659H19.6023L12.7386 7.14773H12.5227V24H9.18182V0.727272Z" fill="black" />
                                        <path d="M57.2301 8.29545H53.6847C53.5483 7.53788 53.2945 6.87121 52.9233 6.29545C52.5521 5.7197 52.0975 5.23106 51.5597 4.82954C51.0218 4.42803 50.4195 4.125 49.7528 3.92045C49.0938 3.71591 48.393 3.61364 47.6506 3.61364C46.3097 3.61364 45.1089 3.95076 44.0483 4.625C42.9953 5.29924 42.1619 6.28788 41.5483 7.59091C40.9422 8.89394 40.6392 10.4848 40.6392 12.3636C40.6392 14.2576 40.9422 15.8561 41.5483 17.1591C42.1619 18.4621 42.9991 19.447 44.0597 20.1136C45.1203 20.7803 46.3134 21.1136 47.6392 21.1136C48.3741 21.1136 49.071 21.0152 49.7301 20.8182C50.3968 20.6136 50.9991 20.3144 51.5369 19.9205C52.0748 19.5265 52.5294 19.0455 52.9006 18.4773C53.2794 17.9015 53.5407 17.2424 53.6847 16.5L57.2301 16.5114C57.0407 17.6553 56.6733 18.7083 56.1278 19.6705C55.59 20.625 54.8968 21.4508 54.0483 22.1477C53.2074 22.8371 52.2453 23.3712 51.1619 23.75C50.0786 24.1288 48.8968 24.3182 47.6165 24.3182C45.6013 24.3182 43.8059 23.8409 42.2301 22.8864C40.6544 21.9242 39.4119 20.5492 38.5028 18.7614C37.6013 16.9735 37.1506 14.8409 37.1506 12.3636C37.1506 9.87879 37.6051 7.74621 38.5142 5.96591C39.4233 4.17803 40.6657 2.80682 42.2415 1.85227C43.8172 0.890151 45.6089 0.40909 47.6165 0.40909C48.8513 0.40909 50.0028 0.587121 51.071 0.943182C52.1468 1.29167 53.1127 1.80682 53.9688 2.48864C54.8248 3.16288 55.5331 3.98864 56.0938 4.96591C56.6544 5.93561 57.0331 7.04545 57.2301 8.29545ZM63.2415 24H59.5142L67.8892 0.727272H71.946L80.321 24H76.5938L70.0142 4.95454H69.8324L63.2415 24ZM63.8665 14.8864H75.9574V17.8409H63.8665V14.8864ZM102.466 0.727272V24H99.2386L87.4091 6.93182H87.1932V24H83.6818V0.727272H86.9318L98.7727 17.8182H98.9886V0.727272H102.466ZM126.372 0.727272V24H123.145L111.315 6.93182H111.099V24H107.588V0.727272H110.838L122.679 17.8182H122.895V0.727272H126.372Z" fill="#666666" />
                                    </svg>





                                    </Link>
                                </div>
                            </div>
                            <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">


                                {/* Profile dropdown */}
                                <Menu as="div" className="flex-shrink-0 relative ml-4 ">
                                    <div>
                                        <Menu.Button className="bg-white rounded flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="sr-only">Open user menu</span>
                                            <div className="pl-1">Account</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  " viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                            {/* <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> */}
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <Link
                                                            to={item.to}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block py-2 px-4 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                        <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={classNames(
                                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="pt-2 pb-3 px-2 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="Link"
                                    to={item.to}
                                    className={classNames(
                                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <div className="px-4 flex items-center">
                                <div className="font-bold text-gray-500">Account</div>

                            </div>
                            <div className="mt-3 px-2 pl-6 space-y-1">
                                {userNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="Link"
                                        to={item.to}
                                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
export default Navbar