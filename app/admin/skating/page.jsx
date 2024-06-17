"use client"

import { useState, useEffect } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminFeatures() {

    const [Skating, setSkating] = useState([])

    const getSkating = async () => {
        let res = await fetch('http://localhost:3000/api/skating')
        let data = await res.json()
        setSkating(data.data)
    }

    const updateTitle = (event, index) => {
        let newData = [...Skating]
        newData[index].title = event.target.value
        setSkating(newData)
    }

    const updateDescription = (event, index) => {
        let newData = [...Skating]
        newData[index].description = event.target.value
        setSkating(newData)
    }

    const updateData = async () => {
        let res = await fetch('http://localhost:3000/api/admin/skating', {
            method: "POST",
            body: JSON.stringify({ AllSkating: Skating })
        })
        
        if(res.status == 200){
            sucessMsg("data updated sucessfully")
        }else{
            errorMsg("something went wrong")
        }

    }

    const sucessMsg = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const errorMsg = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    useEffect(() => {
        getSkating()
    }, [])

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
            <div className="md:mx-4">
                <div className="container m-auto px-4 md:px-0">
                    <div className="heading text-2xl font-semibold text-center my-4">Skating</div>
                    <div className="faqs flex flex-col gap-6">
                        {Skating?.map((item, index) => (
                            <details className="group border-b-[1px] py-4 border-gray-200 w-full cursor-pointer" key={index} open>
                                <summary className="text-gray-700 flex items-center justify-between gap-2">
                                    <div className="left font-semibold text-xl">{item.title}</div>
                                    <div className="right flex items-center gap-4">
                                        <div className="group-open:rotate-180 flex gap-2"><HiOutlineChevronDown size={26} /> </div>
                                    </div>
                                </summary>
                                <div className="faq flex flex-col my-2">
                                    <label htmlFor="name">
                                        <div className="py-2 flex items-center justify-between">Title </div>
                                        <input type="text" name="name" id="name" className="w-full px-2 py-1 ring-1 outline-none rounded-md bg-white ring-gray-800 focus:ring-900" value={item.title} onChange={(e) => {
                                            updateTitle(e, index)
                                        }} />
                                    </label>
                                    <label htmlFor="description">
                                        <div className="block py-2">description</div>
                                        <input type="text" name="description" id="description" className="w-full px-2 py-1 ring-1 outline-none rounded-lg bg-white ring-gray-800 focus:ring-gray-900" value={item.description} onChange={(e) => {
                                            updateDescription(e, index)
                                        }} />
                                    </label>
                                </div>
                            </details>

                        ))}

                    </div>
                    <div className="buttons my-4 flex flex-col gap-4">
                        <button className="bg-gray-800 text-white py-[2px] px-4 rounded-md w-fit self-end" onClick={() => { updateData() }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
