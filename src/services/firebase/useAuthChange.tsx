import { User, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "."

export type AuthStateChange = {
    onChange?: (user: User | null) => void
    onExit?: () => void
}

export const useAuthChange = (props: AuthStateChange) => {
    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if(!user && props.onExit) props.onExit()
            if(props.onChange) props.onChange(user)
        })
    },[])
}