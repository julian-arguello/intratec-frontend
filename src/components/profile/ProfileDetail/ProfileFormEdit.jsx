import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaUserUpdate } from '../../../utils/validate';
import { AvatarSelect } from './AvatarSelect/AvatarSelect'; 

import image1 from '../../../assets/avatars/casco-azul.jpeg';
import image2 from '../../../assets/avatars/casco-gris.jpeg';
import image3 from '../../../assets/avatars/casco-rojo.jpeg';
import image4 from '../../../assets/avatars/casco-amarillo.jpeg';
import image5 from '../../../assets/avatars/casco-verde.jpeg';

const imageOptions = [
  { label: 'casco-azul', value: image1 },
  { label: 'casco-gris', value: image2 },
  { label: 'casco-rojo', value: image3 },
  { label: 'casco-amarillo', value: image4 },
  { label: 'casco-verde', value: image5 },
];

const ProfileFormEdit = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaUserUpdate}
      onSubmit={onSubmit}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form id="edit-profile-form">
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Nombre
                <Field
                  type="text"
                  name="name"
                  className={`form-control ${
                    touched.name && errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Ingrese el nombre"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.name && touched.name) && (
                  <div className="form-text">Mínimo 3 caracteres</div>
                )}
              </label>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Apellido
                <Field
                  type="text"
                  name="lastname"
                  className={`form-control ${
                    touched.lastname && errors.lastname ? 'is-invalid' : ''
                  }`}
                  placeholder="Ingrese el apellido"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.lastname && touched.lastname) && (
                  <div className="form-text">Mínimo 3 caracteres</div>
                )}
              </label>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Seleccione una imagen
                <AvatarSelect
                  options={imageOptions}
                  name="avatar"
                  onChange={(value) => setFieldValue('avatar', value)}
                  initialValue={initialValues.avatar}
                />
                <ErrorMessage
                  name="avatar"
                  component="div"
                  className="invalid-feedback"
                />
              </label>
              {!(errors.avatar && touched.avatar) && (
                <div className="form-text">Seleccione una imagen de la lista</div>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { ProfileFormEdit };
