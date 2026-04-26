import type React from "react";
import type {UserProfileCardProps} from "../../types";

const UserProfileCard : React.FC<UserProfileCardProps> = ({user,
  showEmail =true,
  showRole = true,
  onEdit,
  children}) =>{
   return (
    <div className="p-4 border rounded-lg shadow-md max-w-sm">
     {
        user.avatarUrl &&  (
            <img 
            src={user.avatarUrl}
            alt={user.name}
            className ="w-16 h-16 rounded-full mb-4"/>
        )
     }
     <h2 className="text-lg font-bold">{user.name}</h2>
      {showEmail && <p className="text-gray-600">{user.email}</p>}
      {showRole && <p className="text-gray-700">{user.role}</p>}
      {onEdit &&  (
        <button 
        onClick={() => onEdit(user.id)}
         className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        >
            Edit
        </button>
      )}
      <div className="mt-3">{children}</div>
    </div>
   )
}

export default UserProfileCard

