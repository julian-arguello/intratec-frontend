import { useNavigate } from 'react-router-dom';

export const BackButton = (props) => {
   const navigate = useNavigate();

   return (
      <button
         className="btn-back position-edit-back d-flex justify-content-center align-items-center"
         onClick={() =>
            props.refer !== undefined ? navigate(props.refer) : navigate(-1)
         }
      >
         <span className="material-icons-outlined me-2">arrow_back_ios</span>
         Atrás
      </button>
   );
};
