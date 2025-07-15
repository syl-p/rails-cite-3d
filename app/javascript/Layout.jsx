import {Link, usePage} from '@inertiajs/react'
import {Canvas} from "@react-three/fiber";
import Experience from "@/components/Experience.jsx";
import Navigation from "@/components/Navigation.jsx";
import UserDropdown from "@/components/UserDropdown.jsx";
import {Dialog} from "./components/ui/dialog.jsx";
import New from "./pages/sessions/New.jsx";
import LoginBtn from "./components/LoginBtn.jsx";
import {useEffect, useState} from "react";

export default function Layout({children}) {
    const {current_user, part, parts} = usePage().props
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if(part) {
            const currentIndex = parts.findIndex(p => p.id === part.id)
            setCurrentIndex(currentIndex);
        }
    }, [part, parts]);

    function Pagination() {
        const props = {
            className: "border p-3 flex flex-col items-center justify-center"
        };
        return <div className="flex">
            {parts.at(currentIndex - 1) && <Link href={`/parts/${parts.at(currentIndex - 1).id}`} {...props}>P</Link>}
            {parts.at(currentIndex + 1) && <Link href={`/parts/${parts.at(currentIndex + 1).id}`} {...props}>S</Link>}
        </div>
    }

    return (
        <main className="p-12">
            <header className="z-50 px-18 fixed flex justify-between top-18 left-0 w-full">
                <div>
                    <Link href="/" className="uppercase font-spectral flex space-x-3 items-center">
                        <span className="block p-2 bg-yellow-500 text-white font-bold">
                        </span>
                                    <span className="hidden md:block">
                          Cité<br/>
                          de <span className="font-bold">Carcassonne</span>
                        </span>
                    </Link>
                </div>
                <div className="flex-1 flex space-x-3 items-center justify-end">
                    {current_user ? <UserDropdown user={current_user} />: <LoginBtn />}
                </div>
            </header>
            <section className="grid grid-cols-6 gap-6">
                <section className={"relative border h-[calc(100vh-theme(spacing.24))] " + (part ? 'col-span-3' : 'col-span-6')}>
                    <Canvas flat>
                        <Experience />
                    </Canvas>
                    <div className="absolute left-0 bottom-0">
                        {part && <Pagination />}
                    </div>
                </section>
                {part && <section className="col-span-3 pt-22">
                    {children}
                </section>}
            </section>
        </main>
    )
}