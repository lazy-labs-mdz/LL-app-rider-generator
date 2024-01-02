import React from "react"

export const Button = ({styled, children, onClick}) => {
  return (
    <button className="btn btn-outline text-black" onClick={onClick}>Comenzar 🚀</button>
  );
}
