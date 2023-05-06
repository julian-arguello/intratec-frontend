import { useUser } from "../../context/User.Context";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import UserItem from "./UserItem";


export function UserList(){

const { findUser, state } = useUser()
const [loading, setLoading] = useState(true)

useEffect(  () => {
    findUser()
    .then(() => setLoading(false))
}, [] )

    return(
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 gy-5 gx-0 gx-sm-5">
            {loading ? <Loading /> : (
                state.users.map((u)=>(
                    <UserItem key={u._id} user={u} />
                ))
            )}
        </div>
    )   

}
export default UserList