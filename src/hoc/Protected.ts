import useAuth from "@/store/useAuth";
import {ReactNode} from "react";

interface ProtectedProps {
    children: ReactNode
}

const Protected = (props: ProtectedProps) => {
    const {authenticated } = useAuth();
    return authenticated ? props.children : null;
}

export default Protected;
