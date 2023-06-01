import { Link } from 'react-router-dom';

export const ViewItemButton = (props) => {
  return (
    <Link
      to={`/servicios/${props.id}`}
      className="rounded-4 text-white d-flex align-items-center justify-content-center border px-3 py-2"
    >
      <span class="material-icons-outlined me-2">info</span>Detalles
    </Link>
  );
};
