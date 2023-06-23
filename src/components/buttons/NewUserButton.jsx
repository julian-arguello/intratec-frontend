export const NewUserButton = (props) => {
  return (
     <button
        className={
           props.section == 1
              ? 'd-none'
              : 'active btn-add d-flex justify-content-center align-items-center'
        }
        onClick={() => props.setSection(1)}
     >
        <span className="material-icons-outlined me-2">add_circle_outline</span>
        Nuevo usuario
     </button>
  );
};
