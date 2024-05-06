"use client"
import { useState, useEffect } from "react";

interface DataProps{
    id: number;
    name: string;
    full_name: string;
    owner:{
        login: string;
        id: number;
        avatar_url: string;
        url: string;
    }
}

export default function Repositorios(){
    const [repos, setRepos] = useState<DataProps[]>([])

    useEffect(() =>{
        function getData(){
            fetch("https://api.github.com/users/melch-raiol/repos")
            .then(response => response.json())
            .then((data: DataProps[]) => {

                setTimeout(() =>{
                    setRepos(data);
                }, 1000)
            })
        }

        getData();
    }, [])

}