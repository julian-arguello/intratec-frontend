import { Formik, Form, Field } from "formik";
import { validationSchemaEdit } from "../../../../utils/validate";
import { format } from "date-fns";

// Función para formatear la fecha desde ISO 8601 a YYYY-MM-DDTHH:MM
const formatDateForInput = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return format(date, "yyyy-MM-dd'T'HH:mm");
};

// Función para obtener fechas válidas dinámicamente basadas en los estados
const getValidDateRange = (states, currentState) => {
  const stateKeys = Object.keys(states);
  const currentIndex = stateKeys.indexOf(currentState);

  if (currentIndex === -1) {
    return { minDate: '', maxDate: '' }; // Estado no encontrado
  }

  const previousState = stateKeys[currentIndex - 1];
  const nextState = stateKeys[currentIndex + 1];

  const minDate = previousState ? states[previousState]?.date : '';
  const maxDate = nextState ? states[nextState]?.date : formatDateForInput(new Date()); // Usa la fecha actual si no hay `maxDate`

  return {
    minDate: formatDateForInput(minDate),
    maxDate: maxDate
  };
};

const StateEditForm = ({ stateInfo, service, state, onSubmit}) => {
  // Determinar si el estado actual es 'Recepcionado'
  const isRecepcionado = state === 'Recepcionado';

  console.log("isRecepcionado ", isRecepcionado)

  // Convertir la fecha ISO a un formato adecuado para el input datetime-local
  const initialDate =  formatDateForInput(stateInfo?.date);
  console.log("initialDate ", initialDate)

  // Obtener fechas válidas dinámicamente
  const { minDate, maxDate } = getValidDateRange(service.states, state);

  return (
    <Formik
      initialValues={{
        date: initialDate,
        description: stateInfo.description || "",
      }}
      validationSchema={validationSchemaEdit}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form id="edit-state-form">
          {!isRecepcionado && (
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Fecha y Hora</label>
              <Field
                type="datetime-local"
                id="date"
                name="date"
                min={minDate}
                max={maxDate}
                className={`form-control ${touched.date && errors.date ? "is-invalid" : ""}`}
              />
              {touched.date && errors.date ? (
                <div className="invalid-feedback">{errors.date}</div>
              ) : null}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descripción</label>
            <Field
              as="textarea"
              id="description"
              name="description"
              rows="3"
              placeholder="Ingrese la descripción..."
              className={`form-control ${touched.description && errors.description ? "is-invalid" : ""}`}
            ></Field>
            {touched.description && errors.description ? (
              <div className="invalid-feedback">{errors.description}</div>
            ) : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { StateEditForm };
