import React from 'react'

const LoginPage = () => {
  return (

    <div className="w-screen h-screen flex">

      <div className='w-1/2 bg-gray-100 p-10 pt-30 flex  justify-center'>

        <div className='  w-2/3 f-full bg-amber-600 flex flex-col p-3 gap-10'>
          <h1 className='text-3xl text-black font-medium'>Sign Up</h1>
          <div className='flex '>
            <form className='flex flex-col gap-5 justify-center ' action="/signup" method="POST">
              <div className='flex'>
                <div className="flex-1">
                  <label className="block text-sm font-semibold mb-1">
                    First name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    className="w-full p-2 rounded-lg bg-gray-200 outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-semibold mb-1">
                    Last name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    className="w-full p-2 rounded-lg bg-gray-200 outline-none"
                  />
                </div>

              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Work Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Work Email"
                  className="w-full p-2 rounded-lg bg-gray-200 outline-none"
                />
              </div>


              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 rounded-lg bg-gray-200 outline-none" />
              </div>

            </form>
          </div>
        </div>


      </div>


      <div className='w-1/2 bg-amber-200'></div>

    </div>
  )
}

export default LoginPage
