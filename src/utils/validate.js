import * as yup from "yup";

/*
|--------------------------------------------------------------------------
| Users
|--------------------------------------------------------------------------
*/

//* Esquema para registro de usuario.
export const schemaUserRegister = yup
  .object()
  .shape({
    email: yup
      .string()
      .min(3, "Este campo debe tener como mínimo 3 caracteres.")
      .email()
      .required("El correo electrónico es obligatorio."),

    name: yup
      .string()
      .min(3, "Este campo debe tener como mínimo 3 caracteres.")
      .required("El nombre es obligatorio."),

    lastname: yup
      .string()
      .min(3, "Este campo debe tener como mínimo 3 caracteres.")
      .required("El apellido es obligatorio."),

    role_id: yup.string().min(1).required("El rol es obligatorio."),

    password: yup
      .string()
      .min(5, "Este campo debe tener como mínimo 5 caracteres.")
      .required("La contraseña es obligatoria."),
  })
  .noUnknown();


//* Esquema para actualizar usuario.
export const schemaUserUpdate = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3, "Este campo debe tener como mínimo 3 caracteres.")
      .required("El nombre es obligatorio."),

    lastname: yup
      .string()
      .min(3, "Este campo debe tener como mínimo 3 caracteres.")
      .required("El apellido es obligatorio."),
  })
  .noUnknown();

/**
 * Esquema para actualizar usuario como super admin.
 */
export const schemaUserUpdateSA = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3, "Este campo debe tener como mínimo 3 caracteres.")
      .required("El nombre es obligatorio."),

    lastname: yup
      .string()
      .min(3, "Este campo debe tener como mínimo 3 caracteres.")
      .required("El apellido es obligatorio."),

    role_id: yup.string().min(1).required("El rol es obligatorio."),

    softDelete: yup.string().min(1).required("El estado es obligatorio."),
  })
  .noUnknown();


/*
|--------------------------------------------------------------------------
| Search
|--------------------------------------------------------------------------
*/
export const schemaSearch = yup
  .object()
  .shape({
    search: yup
      .string()
  })
  .noUnknown();

/*
|--------------------------------------------------------------------------
| Clients
|--------------------------------------------------------------------------
*/
export const schemaClientRegister = yup
  .object()
  .shape({
    name_busines: yup
      .string()
      .min(3, "Este campo debe tener como mínimo 3 caracteres.")
      .required("El nombre del cliente es obligatorio."),

    cuit_cuil: yup
      .string()
      .min(11, "Este campo debe tener 11 caracteres numéricos.")
      .max(11, "Este campo debe tener 11 caracteres numéricos como máximo.")
      .required("El Cuit / Cuil es obligatorio."),

    phone: yup
      .string()
      .min(8, "Este campo debe tener como mínimo 8 caracteres.")
      .required("El teléfono es obligatorio."),

    email: yup
      .string()
      .email("El correo electrónico no es válido.")
      .required("El correo electrónico es obligatorio."),
  })
  .noUnknown();


export const schemaClientUpdate = yup
  .object()
  .shape({
    name_busines: yup
      .string()
      .min(3, "Este campo debe tener como mínimo 3 caracteres")
      .required("El nombre del cliente es obligatorio."),

    cuit_cuil: yup
      .string()
      .min(11, "Este campo debe tener 11 caracteres numéricos.")
      .max(11, "Este campo debe tener 11 caracteres numéricos como máximo.")
      .required("El Cuit / Cuil es obligatorio."),

    phone: yup
      .string()
      .min(8, "Este campo debe tener como mínimo 8 caracteres")
      .required("El teléfono es obligatorio."),

    email: yup
      .string()
      .email("El correo electrónico no es válido.")
      .required("El correo electrónico es obligatorio."),
  })
  .noUnknown();

export const schemaClientUpdateService = yup
  .object()
  .shape({
    service_id: yup
      .string()
      .min(10, "Este campo debe contener como mínimo 10 caracteres.")
      .max(24, "Este campo debe contener como máximo 24 caracteres.")
      .required("El IDE del servicio es obligatorio."),
  })
  .noUnknown();


/*
|--------------------------------------------------------------------------
| Services
|--------------------------------------------------------------------------
*/
export const schemaServicesCreate = yup
  .object()
  .shape({
    model: yup
      .string()
      .required("El modelo del equipo es obligatorio.")
      .min(3, "Este campo debe contener como mínimo 3 caracteres."),
    brand: yup
      .string()
      .required("El nombre de la marca es obligatorio.")
      .min(2, "Este campo debe contener como mínimo 2 caracteres."),
    serial_number: yup
      .string()
      .required("El número de serie es obligatorio.")
      .min(6, "Este campo debe contener como mínimo 6 caracteres."),
    description: yup
      .string()
      .required("La descripción es obligatoria.")
      .min(10, "Este campo debe contener como mínimo 10 caracteres."),
    client_id: yup
      .string()
      .required("El cliente es obligatorio.")
      .min(24, "Selecciona el cliente por favor."),
  })
  .noUnknown();


export const schemaServicesUpdate = yup
  .object()
  .shape({
    model: yup
      .string()
      .min(3, "Este campo debe contener como mínimo 3 caracteres.")
      .required("El modelo del equipo es obligatorio."),
    brand: yup
      .string()
      .min(2, "Este campo debe contener como mínimo 2 caracteres.")
      .required("El nombre de la marca es obligatorio."),
    serial_number: yup
      .string()
      .min(6, "Este campo debe contener como mínimo 6 caracteres.")
      .required("El número de serie es obligatorio."),
    // description: yup
    //   .string()
    //   .min(10, "Este campo debe contener como mínimo 10 caracteres.")
    //   .required("La descripción es obligatoria."),
    // state: yup
    //   .string()
    //   .min(3, "Este campo debe contener como mínimo 3 caracteres.")
    //   .required("El estado de reparación es obligatorio."),
    client_id: yup
      .string()
      .min(24, "Selecciona el cliente por favor.")
      .required("El cliente es obligatorio."),
  })
  .noUnknown();


/*
|--------------------------------------------------------------------------
| States
|--------------------------------------------------------------------------
*/

export const validationSchemaAdd = yup.object().shape({
  state: yup.string().required('Seleccione un estado'),
  description: yup.string()
    .required('Ingrese una descripción')
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(140, 'La descripción no puede exceder los 140 caracteres'),
});

export const validationSchemaEdit = yup.object().shape({
  date: yup.date()
    .required('Seleccione una fecha y hora')
    .test('check-date-time', 'La fecha y hora no pueden ser mayores a la fecha y hora actual', function (value) {
      // Obtener la fecha y hora actual para la comparación
      const currentDate = new Date();

      // Normalizar las fechas para eliminar los milisegundos (evitar problemas de comparación)
      const normalizedValue = new Date(value).setSeconds(0, 0); // Eliminar segundos y milisegundos
      const normalizedCurrentDate = new Date(currentDate).setSeconds(0, 0);

      // Comparar el valor recibido con la fecha y hora actual
      if (normalizedValue > normalizedCurrentDate) {
        return this.createError({
          message: 'La fecha y hora no pueden ser mayores a la fecha y hora actual',
        });
      }

      // Devuelve true si la validación pasa
      return true;
    }),
  description: yup.string()
    .required('Ingrese una descripción')
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(140, 'La descripción no puede exceder los 140 caracteres'),
});
/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/
export const schemaLogin = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("El correo electrónico no es válido.")
      .required("El correo electrónico es obligatorio."),

    password: yup
      .string()
      .required("La contraseña es obligatoria."),
  })
  .noUnknown();

/*
|--------------------------------------------------------------------------
| Recovery
|--------------------------------------------------------------------------
*/
export const schemaRecovery = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("El correo electrónico no es válido.")
      .required("El correo electrónico es obligatorio."),
  })
  .noUnknown();

/*
|--------------------------------------------------------------------------
| New password
|--------------------------------------------------------------------------
*/
export const schemaNewPassword = yup
  .object()
  .shape({
    password: yup
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres.")
      .required("La contraseña es obligatoria."),

    token: yup
      .string()
      .min(10, "El enlace es inválido.")
      .required("El enlace es inválido."),
  })
  .noUnknown();


  export const schemaPasswordUpdate = yup.object().shape({
    oldPassword: yup.string()
    .required("La contraseña actual es obligatoria"),
    newPassword: yup.string()
    .min(6, "La nueva contraseña debe tener al menos 6 caracteres")
    .required("La nueva contraseña es obligatoria")
    .notOneOf([yup.ref('oldPassword'), null], "La nueva contraseña no puede ser igual a la actual")
  });

