import './dataTableBranch.scss';
import React, { Suspense } from 'react';
import DataTable from 'react-data-table-component';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Asegúrate de instalar react-icons si aún no lo has hecho

function DataTableBranch() {
  const { branchResponse } = useLoaderData();

  return (
    <Suspense fallback={<div>Cargando sucursales...</div>}>
      <Await resolve={branchResponse}>
        {(branches) => <BranchTableComponent data={branches.data} />}
      </Await>
    </Suspense>
  );
}

const BranchTableComponent = ({ data }) => {
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Código",
      selector: (row) => row.code,
      sortable: true,
    },
    // {
    //   name: "Fecha de Creación",
    //   selector: (row) =>
    //     new Date(row.createdAt).toLocaleDateString("es-ES", {
    //       year: "numeric",
    //       month: "short",
    //       day: "numeric",
    //     }),
    //   sortable: true,
    // },
    {
      name: "Acciones",
      cell: (row) => (
        <div className='details'>
          <Link to={`/editar-sucursal/${row.id}`}>
            <button><FaEdit className='icon'/></button>
          </Link>
          <button onClick={() => handleDelete(row.id)}><FaTrash className='icon'/></button>
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    // Lógica para eliminar la sucursal
    console.log(`Eliminar sucursal con ID: ${id}`);
    // Puedes hacer una solicitud a la API para eliminar la sucursal aquí
  };

  return (
    <div className='dataTableBranch'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Catálogo Sucursales</h1>
            <Link to={"/crear-sucursal"}>
              <button>Crear Nueva Sucursal</button>
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

export default DataTableBranch;
