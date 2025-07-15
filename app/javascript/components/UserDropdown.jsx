import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu.jsx"
import {Link} from "@inertiajs/react";
import SettingsBtn from "./SettingsBtn.jsx";

export default function UserDropdown({user}) {
    return <>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div>
                    {user.username}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem  onSelect={(e) => e.preventDefault()}>
                    <SettingsBtn user={user}/>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link method="delete" href="/session">Se déconnecter</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </>
}