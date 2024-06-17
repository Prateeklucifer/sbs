"use client"

import { useState, useEffect } from 'react'
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminAbout() {

    const [About, setAbout] = useState([])

    const getAllAbout = async () => {
        let res = await fetch('http://localhost:3000/api/shop')
        let data = await res.json()
        setAbout(data.data)
    }

    const updateMainTitle = (event, index) => {
        let newData = [...About]
        newData[index].mainTitle = event.target.value
        setAbout(newData)
    }

    const updatePara1 = (event, index) => {
        let newData = [...About]
        newData[index].para1 = event.target.value
        setAbout(newData)
    }

    const updateData = async () => {
        let res = await fetch('http://localhost:3000/api/admin/shop', {
            method: "POST",
            body: JSON.stringify({ AllAbout: About })
        })

        if (res.status == 200) {
            sucessMsg("data updated sucessfully")
        } else {
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
        getAllAbout()
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
                    <div className="heading text-3xl font-semibold text-center my-4">Shop</div>
                    <div className="faqs flex flex-col gap-6">
                        {About?.map((item, index) => (
                            <div className="faq flex flex-col" key={index}>
                                <label htmlFor="name">
                                    <div className="block py-2">Primary Title</div>
                                    <input type="text" name="name" id="name" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.mainTitle} onChange={(e) => {
                                        updateMainTitle(e, index)
                                    }} />
                                </label>
                                <label htmlFor="para1">
                                    <div className="block py-2">para1</div>
                                    <textarea name="para1" id="para1" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.para1} onChange={(e) => {
                                        updatePara1(e, index)
                                    }}></textarea>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="buttons my-4">
                        <button className="bg-zinc-800 text-white py-[2px] px-4 rounded-md" onClick={() => {
                            updateData()
                        }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
