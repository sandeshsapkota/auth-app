import Protected from "@/hoc/Protected";
import Header from "@/components/ui/header";
import FetchProfile from "@/hoc/FetchProfile";

const AdminLayout = (props:any) => {
    return (
       <FetchProfile>
           <Protected>
               <main>
                   <Header/>
                   {props.children}
               </main>
           </Protected>
       </FetchProfile>
    )
}

export default AdminLayout
