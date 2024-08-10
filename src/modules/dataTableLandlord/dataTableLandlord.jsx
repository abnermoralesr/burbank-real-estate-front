import './dataTableLandlord.scss';
import React, { Suspense } from 'react';
import DataTable from 'react-data-table-component';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Asegúrate de instalar react-icons si aún no lo has hecho

function DataTableLandlord() {
  const { landlordResponse } = useLoaderData();

  return (
    <Suspense fallback={<div>Cargando arrendadores...</div>}>
      <Await resolve={landlordResponse}>
        {(landlords) => <LandlordTableComponent data={landlords.data} />}
      </Await>
    </Suspense>
  );
}

const LandlordTableComponent = ({ data }) => {
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Correo Electrónico",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Teléfono",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Número de Propiedades",
      selector: (row) => row._count.Property,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className='details'>
          <Link to={`/editar-arrendador/${row.id}`}>
            <button><FaEdit className='icon'/></button>
          </Link>
          <button onClick={() => handleDelete(row.id)}><FaTrash className='icon'/></button>
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    // Lógica para eliminar el arrendador
    console.log(`Eliminar arrendador con ID: ${id}`);
    // Puedes hacer una solicitud a la API para eliminar el arrendador aquí
  };

  return (
    <div className='dataTableLandlord'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Catálogo  Propietarios</h1>
            <Link to={"/crear-propietario"}>
              <button>Crear Nuevo Propietario</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='table'>
        <DataTable columns={columns} data={data} pagination />
      </div>
    </div>
  );
}

export default DataTableLandlord;
