import React, {useEffect, useState} from "react";
import axiosInstance from "../Networking/axiosInstance";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export default function ButtonBar() {
    const [data, setData] = useState([])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        handle()
    }, [])

    const handle = async () => {
        try {
            const response = await axiosInstance(`/categories`)
            setData(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const categoriesFunc = () => {
        return (
            data.map((item, index) => {
                return (
                    <button
                        className={"ButtonBar"}
                        key={index}
                        onClick={() => {
                            clickFunc(item)
                        }}
                    >{item.name}</button>
                )
            })
        )
    }

    const clickFunc = (item) => {
        dispatch({
            type:"SET_ID",
            payload:item.id
        })
       return  navigate(`/${item.name}`)
    }

    return (
        <div className={"buttonBar"}>
            {categoriesFunc()}
        </div>
    )
}