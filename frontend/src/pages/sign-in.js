import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import blankLayout from "../components/blank-Layout"

const IndexPage = () => {
    return (
        <blankLayout >
            <main class="relative flex flex-1 flex-col min-h-full overflow-hidden py-8 px-4  antialiased my-[25vh] sm:px-6 lg:px-8">

                <Link to="/"> <svg alt="IMCONN" width="127" height="25" viewBox="0 0 127 25" className="  mx-auto h-8 w-auto " fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.06818 0.727272V24H0.556818V0.727272H4.06818ZM9.18182 0.727272H13.4432L20.8523 18.8182H21.125L28.5341 0.727272H32.7955V24H29.4545V7.15909H29.2386L22.375 23.9659H19.6023L12.7386 7.14773H12.5227V24H9.18182V0.727272Z" fill="black" />
                    <path d="M57.2301 8.29545H53.6847C53.5483 7.53788 53.2945 6.87121 52.9233 6.29545C52.5521 5.7197 52.0975 5.23106 51.5597 4.82954C51.0218 4.42803 50.4195 4.125 49.7528 3.92045C49.0938 3.71591 48.393 3.61364 47.6506 3.61364C46.3097 3.61364 45.1089 3.95076 44.0483 4.625C42.9953 5.29924 42.1619 6.28788 41.5483 7.59091C40.9422 8.89394 40.6392 10.4848 40.6392 12.3636C40.6392 14.2576 40.9422 15.8561 41.5483 17.1591C42.1619 18.4621 42.9991 19.447 44.0597 20.1136C45.1203 20.7803 46.3134 21.1136 47.6392 21.1136C48.3741 21.1136 49.071 21.0152 49.7301 20.8182C50.3968 20.6136 50.9991 20.3144 51.5369 19.9205C52.0748 19.5265 52.5294 19.0455 52.9006 18.4773C53.2794 17.9015 53.5407 17.2424 53.6847 16.5L57.2301 16.5114C57.0407 17.6553 56.6733 18.7083 56.1278 19.6705C55.59 20.625 54.8968 21.4508 54.0483 22.1477C53.2074 22.8371 52.2453 23.3712 51.1619 23.75C50.0786 24.1288 48.8968 24.3182 47.6165 24.3182C45.6013 24.3182 43.8059 23.8409 42.2301 22.8864C40.6544 21.9242 39.4119 20.5492 38.5028 18.7614C37.6013 16.9735 37.1506 14.8409 37.1506 12.3636C37.1506 9.87879 37.6051 7.74621 38.5142 5.96591C39.4233 4.17803 40.6657 2.80682 42.2415 1.85227C43.8172 0.890151 45.6089 0.40909 47.6165 0.40909C48.8513 0.40909 50.0028 0.587121 51.071 0.943182C52.1468 1.29167 53.1127 1.80682 53.9688 2.48864C54.8248 3.16288 55.5331 3.98864 56.0938 4.96591C56.6544 5.93561 57.0331 7.04545 57.2301 8.29545ZM63.2415 24H59.5142L67.8892 0.727272H71.946L80.321 24H76.5938L70.0142 4.95454H69.8324L63.2415 24ZM63.8665 14.8864H75.9574V17.8409H63.8665V14.8864ZM102.466 0.727272V24H99.2386L87.4091 6.93182H87.1932V24H83.6818V0.727272H86.9318L98.7727 17.8182H98.9886V0.727272H102.466ZM126.372 0.727272V24H123.145L111.315 6.93182H111.099V24H107.588V0.727272H110.838L122.679 17.8182H122.895V0.727272H126.372Z" fill="#666666" />
                </svg>
                </Link>


                <div class="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16">
                    <h1 class="sr-only">Log in to your IMCONN account</h1>
                    <form action="/login" class="w-full max-w-sm">
                        <div class="mb-6">
                            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
                            <input type="email" id="email" class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" value="" />

                        </div>
                        <div class="mb-6">
                            <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label>
                            <input type="password" id="password" class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" value="" />
                        </div>
                        <button type="submit" class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full">
                            <span>Sign in to account</span>
                        </button>
                        <p class="mt-8 text-center">
                            <a href="/password/reset" class="text-sm hover:underline">Forgot password?</a>
                        </p>
                    </form>
                </div>
                <footer class="relative shrink-0 flex justify-center sm:block ">
                    <div class="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
                        <p class="text-center sm:text-left">Don't have an account?
                        </p>
                        <a class="inline-flex  justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20" href="/all-access">
                            <span>Create Account <span aria-hidden="true">→</span>
                            </span>
                        </a>
                    </div>
                </footer>
            </main>
        </blankLayout>
    )
}

export default IndexPage

