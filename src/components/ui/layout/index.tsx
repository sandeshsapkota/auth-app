import Header from "@/components/ui/header";
import Protected from "@/hoc/Protected";

const AdminLayout = (props:any) => {
    return (
       <Protected>
               <main>
                   <Header/>
                   {props.children}
               </main>
       </Protected>
    )
}

export default AdminLayout
