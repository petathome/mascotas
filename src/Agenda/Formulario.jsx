import { Rutas } from '../Rutas/Rutas';
import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export function Formulario({ onClose }) {
  const [inputDia, setInputDia] = useState('');
  const [inputHora, setInputHora] = useState('');
  const [inputNombre, setInputNombre] = useState('');
  const [inputCorreo, setInputCorreo] = useState('');
  const [errores, setErrores] = useState({});
  const [mensajeNombre, setMensajeNombre] = useState('');
  const [mensajeNHora, setMensajeHora] = useState('');
  const formRef = useRef(null);

  

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (formRef.current && !formRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [onClose]);

  const validarFormulario = (evento) => {
    evento.preventDefault();
    let listaErrores = {};

    if (!inputNombre) {
      listaErrores.nombre = 'El campo nombre está vacío';
    } else if (inputNombre.length < 10) {
      listaErrores.nombre = 'El nombre debe tener al menos 10 caracteres';
    } else {
      listaErrores.nombre = '';
    }

    if (!inputCorreo) {
      listaErrores.correo = 'El campo correo está vacío';
    } else {
      listaErrores.correo = '';
    }

    if (!inputDia) {
      listaErrores.dia = 'El campo día está vacío';
    } else {
      listaErrores.dia = '';
    }

    if (inputHora === 'DEFAULT') {
      listaErrores.hora = 'Seleccione la hora del servicio';
    } else {
      listaErrores.hora = '';
    }

    setErrores(listaErrores);

    const tieneErrores = Object.values(listaErrores).some((error) => error !== '');

    if (tieneErrores) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete correctamente el formulario',
      });
    } else {
      Swal.fire('Servicio adquirido', 'click me', 'success');
    }
  };

  const validarNombre = (valorNombre) => {
    if (valorNombre.length < 10) {
      setMensajeNombre('El nombre debe tener al menos 10 caracteres');
    } else {
      setMensajeNombre('');
    }
  };

  const validarHora = (valorHora) => {
    if (valorHora === 'DEFAULT') {
      setMensajeHora('Seleccione la hora del servicio');
    } else {
      setMensajeHora('');
    }
  };

  return (
    <div className="form-overlay">
      <div className="formulario d-flex justify-content-center align-items-center bg-info-subtle">
        <div ref={formRef}>
          <div>
            <button className="close-button" onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <h1>Formulario de Agendamiento para { }</h1>

          <form onSubmit={validarFormulario}>
            <div className="form-group">
              <label htmlFor="date" className="col-1 col-form-label">
                Dia:
              </label>
              <div className="col-5">
                <div className="input-group date" id="datepicker">
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={inputDia}
                    onChange={(e) => setInputDia(e.target.value)}
                  />
                </div>
                {errores.dia && <span>{errores.dia}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="date" className="col-1 col-form-label">
                Hora:
              </label>
              <select
                value={inputHora}
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setInputHora(e.target.value);
                  validarHora(e.target.value);
                }}
              >
                <option id="option" value="DEFAULT">
                  Seleccione la hora del servicio
                </option>
                <option value="1">10 am</option>
                <option value="2">1 pm</option>
                <option value="3">5 pm</option>
              </select>
              {mensajeNHora && <span className="text-danger">{mensajeNHora}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo:</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="nombre"
                name="nombre"
                value={inputNombre}
                onChange={(e) => {
                  setInputNombre(e.target.value);
                  validarNombre(e.target.value);
                }}
              />
              {mensajeNombre && <span className="text-danger">{mensajeNombre}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="correo"
                name="correo"
                value={inputCorreo}
                onChange={(e) => setInputCorreo(e.target.value)}
              />
              {errores.correo && <span>{errores.correo}</span>}
            </div>
            <br />

            <button type="submit" className="btn btn-primary w-100">
              AGENDAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
