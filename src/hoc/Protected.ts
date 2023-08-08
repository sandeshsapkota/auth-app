import useAuth from "@/store/useAuth";
import {useRouter} from "next/navigation";
import {ReactNode, useEffect} from "react";

interface ProtectedProps {
    children: ReactNode
}

const Protected = (props: ProtectedProps) => {
    const {token,fetchProfile, authenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(token){
            fetchProfile();
        }else{
            router.push('/')
        }
    }, [token])


    return authenticated ? props.children : null;
}

export default Protected;
