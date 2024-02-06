import { User } from "../interfaces/reqRes"
import { useUser } from "../hooks/useUser"




export const Usuarios = () => {

    const {users, nextPage, prevPage,pageRef, totalPagesRef} = useUser();

    const renderUser = (user: User) => {
        return (
        <tr key={user.id.toString()}>
            <td>
                <img 
                src={user.avatar} 
                alt={user.first_name} 
                style={{
                    width: 35,
                    borderRadius: 100
                }}
                />
            </td>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
        </tr>
        );
    };

  return (
    <>
    <h3>Usuarios: </h3>
    <table className="table">
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>

        </thead>
        <tbody>
        {
            users.map(renderUser)
        }
        </tbody>
    </table>
    {
        (totalPagesRef.current <= pageRef.current)
        ? 
        (<button className="btn btn-danger" onClick={prevPage}> Anteriores </button>)
        : (<div></div>)
    }
    {
        (totalPagesRef.current > pageRef.current)?(<button className="btn btn-success"
        onClick={nextPage}
        > 
            Siguientes
        </button>):(<div></div>)
    }
    
    
    </>
  )
}
