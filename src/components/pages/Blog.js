import React from 'react';

const posts = [
  {
    title: 'E-Commerce Back End Demo Video!',
    href: 'https://www.youtube.com/watch?v=9grjOViAVZE',
    category: { name: 'E-Commerce Back End GitHub', href: 'https://github.com/xBOBOYx/E-Commerce-Back-End' },
    description:
      'Task is to build the back end for an e-commerce site to be able to add products, categories, and orders.',
  
    imageUrl:
      './images/ecom.jpg',
  },
  {
    title: 'Employee Tracker Demo Video! ',
    href: 'https://www.youtube.com/watch?v=6OVuB3vHK3Y',
    category: { name: 'Employee Tracker GitHub', href: '#https://github.com/xBOBOYx/employee-tracker' },
    description:
      'View and manage the departments, roles, and employees in my company so that I can organize and plan my business.',
   
    imageUrl:
      '/images/employeeTracker.jpg',
  },
  {
    title: 'Check out Geek Emporium for all of your geek needs!',
    href: 'https://radiant-plateau-99993.herokuapp.com/',
    category: { name: 'Geek Emporium GitHub', href: 'https://github.com/xBOBOYx/Project-2' },
    description:
      'We created an ecommerce application that allows you create listing for your figurines, cards, games, etc., or you can purchase items that other people are listing for sell.',

    imageUrl:
      '/images/single-item.jpg',
  },
]

export default function Example() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Take a looks at some of my favorite school projects.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

