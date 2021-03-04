import React from 'react'

const Contact = () => {
  
  return (
    <form className="w-full max-w-sm p-4 m-20">
      <div className="flex items-center border-b border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text" placeholder="yourEmailId@xyz.com" aria-label="Email"/>
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button">
          Contact
        </button>
        <button
          className="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-800 text-sm py-1 px-2 rounded"
          type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Contact;