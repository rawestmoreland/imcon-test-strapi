import React from "react"


const blankLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen  flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>

        {children}
      </div>

    </div>
  )
}

export default blankLayout
