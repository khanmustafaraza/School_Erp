import React from 'react'

const PageUrl = ({pageUrl}) => {
  return (
      <div className="flex items-center text-sm my-1">
                <span className=" capitalize font-bold   p-[5px] py-2 text-gray-400 border-b-2">
                  Page Address:- {pageUrl && pageUrl}
                </span>
              </div>
  )
}

export default PageUrl