import './dataTableUser.scss';
import React, { Suspense } from 'react';
import DataTable from 'react-data-table-component';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Asegúrate de instalar react-icons si aún no lo has hecho

function DataTableUser() {
  const { userResponse } = useLoaderData();

  return (
    <Suspense fallback={<div>Cargando usuarios...</div>}>
      <Await resolve={userResponse}>
        {(users) => <UserTableComponent data={users.data} />}
      </Await>
    </Suspense>
  );
}

const UserTableComponent = ({ data }) => {
  const columns = [
    {
      name: "Nombre de Usuario",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Avatar",
      selector: (row) => (
        <img
          src={row.avatar || "/no-image.jpg"}
          alt={row.username}
          width={50}
          height={50}
        />
      ),
    },
    {
      name: "Sucursal",
      selector: (row) => row.Branch?.name || "N/A",
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
          <Link to={`/editar-usuario/${row.id}`}>
            <button><FaEdit className='icon'/></button>
          </Link>
          <button onClick={() => handleDelete(row.id)}><FaTrash className='icon'/></button>
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    // Lógica para eliminar el usuario
    console.log(`Eliminar usuario con ID: ${id}`);
    // Puedes hacer una solicitud a la API para eliminar el usuario aquí
  };

  return (
    <div className='dataTableUser'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Catálogo Usuarios</h1>
            <Link to={"/crear-usuario"}>
              <button>Crear Nuevo Usuario</button>
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

export default DataTableUser;
