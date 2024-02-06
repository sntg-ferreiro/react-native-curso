import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/Reqres"
import { ReqResList, User } from "../interfaces/reqRes"

export const useUser = () => {
    const [users, setUsers] = useState<User[]>([])
    const pageRef = useRef(1)
    const totalPagesRef = useRef(0)

    useEffect(() => {
      //Llamado A Api
      fetchUsers(); 
      
    }, [])

    const fetchUsers = async() => {
        const res = await reqResApi.get<ReqResList>('/users', {
            params:{
                page:pageRef.current
            }
        });
        totalPagesRef.current = res.data.total_pages;
        if(res.data.data.length > 0){
            setUsers(res.data.data);
            
        }else{
            alert("No hay mas registros!");
        }

    }

    const nextPage = () => {
        pageRef.current ++;
        if(pageRef.current > totalPagesRef.current){
            pageRef.current = totalPagesRef.current
        }
        console.log("calling fetchusers with page... "+pageRef.current)
        fetchUsers()
    }
    const prevPage = () => {
        pageRef.current --;
        if(pageRef.current < 1){
            pageRef.current = 1
        }
        console.log("calling fetchusers with page... "+pageRef.current)
        fetchUsers()
    }

    return {
        users, nextPage, prevPage,pageRef, totalPagesRef
    }
}
