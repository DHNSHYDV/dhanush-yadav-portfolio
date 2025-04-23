import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full flex flex-col items-center justify-center mb-4">
                <div className="font-bold text-[20px] mb-4 text-center">Connect at...</div>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <a 
                        href="https://www.linkedin.com/in/dhanush-yadav-ab4a912b9/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center cursor-pointer hover:opacity-80 mb-4"
                    >
                        <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            width={30}
                            height={30}
                        />
                        <span className="text-[15px] mt-2">@dhanush-yadav</span>
                    </a>
                    <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                        <a 
                            href="https://github.com/DHNSHYDV" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center cursor-pointer hover:opacity-80"
                        >
                            <Image
                                src="/github.svg"
                                alt="GitHub"
                                width={30}
                                height={30}
                            />
                            <span className="text-[15px] mt-2">@DHNSHYDV</span>
                        </a>
                        <a 
                            href="mailto:dhanushyadavkrish@gmail.com" 
                            className="flex flex-col items-center justify-center cursor-pointer hover:opacity-80"
                        >
                            <Image
                                src="/email.svg"
                                alt="Email"
                                width={30}
                                height={30}
                            />
                            <span className="text-[15px] mt-2">@dhanushyadavkrish@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Dhanush Yadav {new Date().getFullYear()}. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer