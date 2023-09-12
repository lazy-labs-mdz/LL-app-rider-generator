import React from "react";

export const Header = () => {
  return (
    <div className='flex justify-end items-center mt-1 pr-2'>
      <div className="avatar cursor-pointer">
        <div className="w-14 rounded-full bg-slate-600">
          <img src="https://joesch.moe/api/v1/random" />
        </div>
      </div>
    </div>
  )
}
