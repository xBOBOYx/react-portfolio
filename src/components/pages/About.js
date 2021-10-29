import React from 'react';


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
                    src="https://previews.dropbox.com/p/thumb/ABV9aGDus7mHl7Sfh-WiwpfdzE7dMhpL5xJwNoV-YHyGOtSJBasx4imlGU44--OcPOaI6naa9GKZMe_NjLPRC44GHdZMmp-B60gUC3f_g-Ehru4CvSqmuibMd3zKjF7npIXUSYhm0Kfqri1Px7SIcItAMgf3UWlcJeyYz-ucWN2F15Zlq0ASH2zdeio75yV6xxIY498xvPkxCirIhRZ-N6uLGoKJ9_PlAaotCjUBoMMLH1RARJZz2ZpS0Kw8Vkfd0h0Wlr0Dt_jZAnshwwlYZ72sQpADW3Mmb3Mc3mHLa9KPNqJoOvtf44ex8o_2h4hmBWo1_Un-AXJP1sEkaxuyywkJ2K7ariXbmIc0IU8r5Y_evA/p.jpeg?fv_content=true&size_mode=5"
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


