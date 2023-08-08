import useAuth from "@/store/useAuth";

const Header = () => {
    const {logout} = useAuth();
    console.log('this should not show for un authenticated user !')
    return (
        <div className="bg-blue-50 p-4">
            <div className="flex justify-between items-center container">
                Header
                <button onClick={logout}> Logout</button>
            </div>
        </div>
    )
}

export default Header
