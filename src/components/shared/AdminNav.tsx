import { CreditCard, LogOut, PlusCircle, Settings, User } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TailSpin } from "react-loader-spinner"
import { convertNullToUndefined } from "@/lib/utils"
import { signOut, useSession } from "next-auth/react"

const AvatarDropdown = () =>  {
    const { data: session, status } = useSession()
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          {
              status === 'loading'
              ?
              <Avatar>
                <AvatarFallback>
                  <TailSpin
                    height="40"
                    width="40"
                    color="#000"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </AvatarFallback>
              </Avatar>
              :
              <Avatar className="cursor-pointer shadow ring-2 w-8 h-8 hover:ring-4 transition-all   ring-green-700">
                <AvatarImage src={convertNullToUndefined(session?.user.image) as string}></AvatarImage>
                <AvatarFallback >{convertNullToUndefined(session?.user.name?.charAt(0))}</AvatarFallback>
              </Avatar>
            }
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{session?.user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.user.name}
              </p>
            </div>
          </DropdownMenuLabel>
          
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => void signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}

export default function AdminNav() {
    const { data: session, status } = useSession()
  return (
    <div className="flex justify-end py-2 px-3">
        <AvatarDropdown/>
    </div>
  )
}