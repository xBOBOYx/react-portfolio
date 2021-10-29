import React from 'react';

import { CameraIcon } from '@heroicons/react/solid'

export default function About() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Anthony Zamora
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://previews.dropbox.com/p/thumb/ABXmPYTktAMKSYdqOSJF0q5pf7TdmTpi3Oznkc3DLBSLKwH9rHcP3NXXsuSRoVNPw2O3gw_eQzj3z6KSZoG1KkHWLViEFpJ9u4QrngG5ErwK78ucQWPu6pDdKwrgW_FNhWGewo28ExHtYfoI9lilS82ah7ffh-uITqxRiCZCo7BqbFbNsVCdKwYCzKfRP_GI9wqrOHunHrWavbRAAAMDkoofbFtUeNlBhH2LAcBYAzh248NFLVfHX6oWF9LredyO_t0jJ-9O9n_f3bQHc2D-rrz1BU74WbrfgjlUe03D9Bsu4A_n5CxMbTKKb5pLQ0QIkSLNAFoLfVnfeXrsY04Ud-d88nIGkcQKe1j2oM8MPwZiRQ/p.jpeg?size=2048x1536&size_mode=3"
                    alt="Anthony Zamora"
                    width={1184}
                    height={1376}
                  />
                </div>
               
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
              I am a Full Stack Web Development student at UCSD. My
          dream is to become a Full Stack Web Developer so I can create engaging content for everyone to enjoy. I
          currently work for an international real estate brokerage in Marketing. I create everything from
          marketing assets to marketing business plans for my clients. I want to use my marketing expertise and graphic design
          background to become an amazing Full Stack Web Developer!
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


