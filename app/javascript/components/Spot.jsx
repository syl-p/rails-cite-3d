import {Html} from "@react-three/drei";
import {Link} from "@inertiajs/react";

export default function Spot({part, position: {x, y, z}}) {
    return <Html position={[x, y, z]} center className="relative flex space-x-3" >
        <div className="w-[18px] h-[18px] rounded-full bg-yellow-500 p-1"></div>
        <div className="bg-white p-2">
            <Link href={`/parts/${part.id}`}>{part.title}</Link>
        </div>
    </Html>
}