import './dataTableProperty.scss';
import React, { Suspense } from 'react';
import DataTable from 'react-data-table-component';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Asegúrate de instalar react-icons si aún no lo has hecho

function DataTableProperty() {
  const { propertyResponse } = useLoaderData();

  return (
    <Suspense fallback={<div>Cargando propiedades...</div>}>
      <Await resolve={propertyResponse}>
        {(properties) => <PropertyTable data={properties.data} />}
      </Await>
    </Suspense>
  );
}

const PropertyTable = ({ data }) => {
  const columns = [
    {
      name: "Título",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Imagen",
      selector: (row) => (
        <img
          src={row.images.length > 0 ? row.images[0] : "/no-image.jpg"}
          alt={row.title}
          width={50}
          height={50}
        />
      ),
    },
    {
      name: "Precio",
      selector: (row) => `${row.price} ${row.currency}`,
      sortable: true,
    },
    {
      name: "Tamaño (m²)",
      selector: (row) => row.PropertyDetail[0]?.squareMeters || "N/A",
      sortable: true,
    },
    {
      name: "Fecha de Creación",
      selector: (row) =>
        new Date(row.createdAt).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      sortable: true,
    },
    {
      name: "Creado Por",
      selector: (row) => row.User?.username || "N/A",
    },
    {
      name: "Asignado A",
      selector: (row) => row.UserAssigned?.username || "N/A",
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className='details'>
          <Link to={`/editar-propiedad/${row.id}`}>
            <button><FaEdit className='icon'/></button>
          </Link>
          <button onClick={() => handleDelete(row.id)}><FaTrash className='icon'/></button>
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    // Lógica para eliminar la propiedad
    console.log(`Eliminar propiedad con ID: ${id}`);
    // Puedes hacer una solicitud a la API para eliminar la propiedad aquí
  };

  return (
    <div className='dataTableProperty'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Catálogo  Propiedades</h1>
            <Link to={"/crear-propiedad"}>
              <button>Crear Nueva Propiedad</button>
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

export default DataTableProperty;
