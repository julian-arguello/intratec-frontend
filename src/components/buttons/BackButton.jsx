import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn-back position-edit-back d-flex justify-content-center align-items-center"
      onClick={() => navigate(-1)}
    >
      <span class="material-icons-outlined me-2">arrow_back_ios</span>
      Atrás
    </button>
  );
};
