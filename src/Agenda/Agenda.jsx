import { Rutas } from '../Rutas/Rutas';
import React, { useState } from 'react';
import { Formulario } from './Formulario';
import './Agenda.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export function Agenda() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleMostrarFormulario = () => {
        setMostrarFormulario(true);
    };

    const handleCloseFormulario = () => {
        setMostrarFormulario(false);
    };

    let servicios = [
        {
            id: 1,
            nombre: "Peluqueria",
            descripcion: "Nuestra peluquería para mascotas ofrece servicios de aseo especializados, cuidando el bienestar y la belleza de tu compañero peludo. ¡Hazlos lucir radiantes!",
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/empleados%2Fempleado1.jpg?alt=media&token=c10530a2-803f-4c08-ae03-333d7107b7df",
            valor: 15000
        },
        {
            id: 2,
            nombre: "Veterinaria",
            descripcion: "Ofrecemos consultas veterinarias profesionales y compasivas para el cuidado óptimo de tus mascotas. ¡Tu tranquilidad es nuestra prioridad!",
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/empleados%2Fempleado2.jpg?alt=media&token=e0c7d94f-3046-4b20-92c6-2766e521a1a1",
            valor: 20000
        },
        {
            id: 3,
            nombre: "Guarderia",
            descripcion: "Nuestra guardería para mascotas brinda un ambiente seguro y divertido, con cuidadores dedicados, donde tus peludos amigos se sienten como en casa.",
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/empleados%2Fempleado3.jpg?alt=media&token=2b2ec192-55b0-45f3-b4c4-48ea408523f3",
            valor: 40000
        }
    ];

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3">
                {servicios.map(function (servicio) {
                    return (
                        <div className="col" key={servicio.id}>
                            <div className="card h-100 shadow text-center">
                                <h1 className="name">{servicio.nombre}</h1>
                                <br />
                                <h1 style={{ fontSize: '20px' }}>{servicio.descripcion}</h1>
                                <img
                                    src={servicio.foto}
                                    alt="empleadoX"
                                    className="img-fluid w-100"
                                />
                                <p>Valor: {servicio.valor}</p>
                                <button
                                    value={servicio.id}
                                    onClick={handleMostrarFormulario}
                                    className="btn btn-success"
                                >
                                    Agendar
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            {mostrarFormulario ? (
                <>
                    <div>
                        <button className="close-button" onClick={handleCloseFormulario}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="overlay">
                        <Formulario />
                    </div>
                </>
            ) : (
                <><div>sssssssssss</div></>
            )}

        </div>
    );
}

export default Agenda;
