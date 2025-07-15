import {useEffect} from "react";
import  {useThree} from "@react-three/fiber"
import * as THREE from "three";

export default function show({part}) {
    useEffect(() => {
    }, [part]);

    return <>
        <h1 className="mb-6">{part.title}</h1>
        {part.body}
    </>
}