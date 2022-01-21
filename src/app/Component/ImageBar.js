import React, {useEffect, useState} from "react";
import axiosInstance from "../Networking/axiosInstance";
import {useSelector} from "react-redux";

export default function ImageBar() {
    const [data, setData] = useState([])
    const store = useSelector((state) => state.idReducer.id)

    useEffect(() => {
        handle()
    }, [])

    const handle = async () => {
        try {
            const response = await axiosInstance(`/images/search?limit=10&page=1&category_ids=${store}`)
            setData(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const imageFunc = () => {
        return (
            data.map((item, index) => {
                return (
                    <img
                        key={index}
                        src={`${item.url}`}
                        alt={"no Image"}
                        className={"imageBar"}
                    />
                )
            })
        )
    }

    return (
        <div >
            {imageFunc()}
        </div>
    )
}