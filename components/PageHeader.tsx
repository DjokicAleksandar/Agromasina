import React from 'react'

interface PageHeaderProps {
    header: string;
}

const PageHeader = ({header}: PageHeaderProps) => {
  return (
    <div className="w-full p-5 bg-[#0a2b14]">
        <div 
            className={`text-4xl font-light text-white flex justify-center items-center m-5 p-5 whitespace-nowrap`}
            style={{borderBottom: "1px solid white"}}>
            {header}
        </div>
    </div>
  )
}

export default PageHeader