
import UploadImage from '#components/uploadImage/uploadImage';
import ReactQuill from 'react-quill';
import './newProperty.scss'
import { useState } from 'react';
import "react-quill/dist/quill.snow.css";
import PropertyService from '#services/api/PropertyService';
import { useLoaderData } from 'react-router-dom';

function NewProperty() {
    const [description, setDescription] = useState("");
    const [images, setImages] = useState("");
    const [descriptionPrivate, setDescriptionPrivate] = useState("");
    const [wareHouse, setWareHouse] = useState("");
    const data = useLoaderData();

    const handleCheckboxChange = (event) => {
        const { checked } = event.target;

        setWareHouse(checked)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        data.description = description;
        data.descriptionPrivate = descriptionPrivate;
        data.images = images;

        try {
            const res = await PropertyService.createProperty(data);

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="newProperty">
            <div className="formContainer">
                <h1>
                    {!data.id && (<>Agregar </>)}
                    {data.id && (<>Editar </>)}
                    Propiedad
                </h1>
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        {/* Campos de Propiedad */}
                        <div className="item">
                            <label htmlFor="branchId">Sucursal</label>
                            <select id="branchId" name="branchId">
                                <option value="66b2f7e621a0547b70a47330">Sucursal 1</option>
                                <option value="66b2f7e621a0547b70a47330">Sucursal 2</option>
                                {/* Añadir más opciones según sea necesario */}
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="landlordId">Propietario</label>
                            <select id="landlordId" name="landlordId">
                                <option value="66b2f66a21a0547b70a4732f">Propietario 1</option>
                                <option value="66b2f66a21a0547b70a4732f">Propietario 2</option>
                                {/* Añadir más opciones según sea necesario */}
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="userIdAssigned">Usuario Asignado</label>
                            <select id="userIdAssigned" name="userIdAssigned">
                                <option value="66a7329103adfbb23b90eff2">Usuario 1</option>
                                <option value="66a732ac03adfbb23b90eff3">Usuario 2</option>
                                {/* Añadir más opciones según sea necesario */}
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="consecutive">Consecutivo</label>
                            <input id="consecutive" name="consecutive" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="type">Tipo</label>
                            <select id="type" name="type">
                                <option value=""></option>
                                <option value="condo">Departamento</option>
                                <option value="house">Casa</option>
                                <option value="land">Terreno</option>
                                <option value="commercial">Comercial</option>
                                <option value="office">Oficina</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="price">Precio</label>
                            <input id="price" name="price" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="commission">Comisión</label>
                            <input id="commission" name="commission" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="currency">Moneda</label>
                            <select id="currency" name="currency">
                                <option value="USD">USD</option>
                                <option value="MXN">MXN</option>
                                {/* Añadir más opciones según sea necesario */}
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="status"> Status</label>
                            <select id="status" name="status">
                                <option value="1">Activo</option>
                                <option value="0">Inactivo</option>
                                {/* Añadir más opciones según sea necesario */}
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="rent">
                                ¿En Renta?
                            </label>
                            <input id="rent" name="rent" type="checkbox" className='option-input'/>
                        </div>
                        <div className="item">
                            <label htmlFor="exclusive">¿Exclusivo?</label>
                            <input id="rent" name="rent" type="checkbox" className='option-input' />
                        </div>
                        <div className="item title">
                            <label htmlFor="title">Título</label>
                            <input id="title" name="title" type="text" />
                        </div>
                        <div className="item description">
                            <label htmlFor="description">Descripción</label>
                            <ReactQuill theme='snow' onChange={setDescription} value={description} />
                        </div>
                        <div className="item description">
                            <label htmlFor="description">Descripción Interna</label>
                            <ReactQuill theme='snow' onChange={setDescriptionPrivate} value={descriptionPrivate} />
                        </div>
                        <div className="item">
                            <label htmlFor="street">Calle</label>
                            <input id="street" name="street" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="street2">Calle 2</label>
                            <input id="street2" name="street2" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="city">Ciudad</label>
                            <input id="city" name="city" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="state">Estado</label>
                            <input id="state" name="state" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="zipCode">Código Postal</label>
                            <input id="zipCode" name="zipCode" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="country">País</label>
                            <input id="country" name="country" type="text" />
                        </div>
                        <div className="item title">
                            <label htmlFor="title">URL Google maps</label>
                            <input id="maps" name="maps" type="maps" />
                        </div>

                        {/* PropertyDetail */}
                        <div className="item">
                            <label htmlFor="surface">Superficie</label>
                            <input id="surface" name="surface" type="number" step="0.01" />
                        </div>
                        <div className="item">
                            <label htmlFor="squareMeters">Metros Cuadrados</label>
                            <input id="squareMeters" name="squareMeters" type="number" step="0.01" />
                        </div>
                        <div className="item">
                            <label htmlFor="frontMeters">Metros Frente</label>
                            <input id="frontMeters" name="frontMeters" type="number" step="0.01" />
                        </div>
                        <div className="item">
                            <label htmlFor="backMeters">Metros Atrás</label>
                            <input id="backMeters" name="backMeters" type="number" step="0.01" />
                        </div>
                        <div className="item">
                            <label htmlFor="constructionMeters">Metros de Construcción</label>
                            <input id="constructionMeters" name="constructionMeters" type="number" step="0.01" />
                        </div>
                        <div className="item">
                            <label htmlFor="bedrooms">Número de Habitaciones</label>
                            <input id="bedrooms" name="bedrooms" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="bathrooms">Número de Baños</label>
                            <input id="bathrooms" name="bathrooms" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="parking">Número de Estacionamientos</label>
                            <input id="parking" name="parking" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="coveredParking">Estacionamiento Cubierto</label>
                            <input id="coveredParking" name="coveredParking" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="laundryRoom">Cuarto de Lavado</label>
                            <input id="laundryRoom" name="laundryRoom" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="serviceRoom">Cuarto de Servicio</label>
                            <input id="serviceRoom" name="serviceRoom" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="walkInCloset">Vestidor</label>
                            <input id="walkInCloset" name="walkInCloset" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="furnished">Amueblado</label>
                            <input id="furnished" name="furnished" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="fullyEquippedKitchen">Cocina Totalmente Equipada</label>
                            <input id="fullyEquippedKitchen" name="fullyEquippedKitchen" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="jacuzzi">Jacuzzi</label>
                            <input id="jacuzzi" name="jacuzzi" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="airConditioning">Aire Acondicionado</label>
                            <input id="airConditioning" name="airConditioning" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="heating">Calefacción</label>
                            <input id="heating" name="heating" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="garden">Jardín</label>
                            <input id="garden" name="garden" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="roofGarden">Azotea Jardinada</label>
                            <input id="roofGarden" name="roofGarden" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="gymnasium">Gimnasio</label>
                            <input id="gymnasium" name="gymnasium" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="library">Biblioteca</label>
                            <input id="library" name="library" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="wineCellar">Bodega de Vinos</label>
                            <input id="wineCellar" name="wineCellar" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="bar">Bar</label>
                            <input id="bar" name="bar" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="study">Estudio</label>
                            <input id="study" name="study" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="tvRoom">Sala de TV</label>
                            <input id="tvRoom" name="tvRoom" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="livingRoom">Sala</label>
                            <input id="livingRoom" name="livingRoom" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="diningRoom">Comedor</label>
                            <input id="diningRoom" name="diningRoom" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="gameRoom">Sala de Juegos</label>
                            <input id="gameRoom" name="gameRoom" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="pets">Mascotas Permitidas</label>
                            <input id="pets" name="pets" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="surveillance">Sistema de Vigilancia</label>
                            <input id="surveillance" name="surveillance" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="partyRoom">Salón de Eventos</label>
                            <input id="partyRoom" name="partyRoom" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="greenAreas">Áreas Verdes</label>
                            <input id="greenAreas" name="greenAreas" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="pool">Piscina</label>
                            <input id="pool" name="pool" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="indoorPool">Piscina Interior</label>
                            <input id="indoorPool" name="indoorPool" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="tennisCourt">Cancha de Tenis</label>
                            <input id="tennisCourt" name="tennisCourt" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="golfCourse">Campo de Golf</label>
                            <input id="golfCourse" name="golfCourse" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="playArea">Área de Juegos</label>
                            <input id="playArea" name="playArea" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="horizontalCondo">Condominio Horizontal</label>
                            <input id="horizontalCondo" name="horizontalCondo" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="clubhouse">Casa Club</label>
                            <input id="clubhouse" name="clubhouse" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="terrace">Terraza</label>
                            <input id="terrace" name="terrace" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="spa">Spa</label>
                            <input id="spa" name="spa" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="laundryDryCleaning">Lavandería y Limpieza en Seco</label>
                            <input id="laundryDryCleaning" name="laundryDryCleaning" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="helipad">Helipuerto</label>
                            <input id="helipad" name="helipad" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="securitySystem">Sistema de Seguridad</label>
                            <input id="securitySystem" name="securitySystem" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="closedCircuit">Circuito Cerrado</label>
                            <input id="closedCircuit" name="closedCircuit" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="networkInstallation">Instalación de Red</label>
                            <input id="networkInstallation" name="networkInstallation" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="elevator">Elevador</label>
                            <input id="elevator" name="elevator" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="serviceElevator">Elevador de Servicio</label>
                            <input id="serviceElevator" name="serviceElevator" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="beach">Playa</label>
                            <input id="beach" name="beach" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="marina">Marina</label>
                            <input id="marina" name="marina" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="residentialLandUse">Uso Residencial de Terreno</label>
                            <input id="residentialLandUse" name="residentialLandUse" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="residentialCommercial">Uso Comercial Residencial</label>
                            <input id="residentialCommercial" name="residentialCommercial" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="residentialOffice">Uso de Oficina Residencial</label>
                            <input id="residentialOffice" name="residentialOffice" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="residentialMixed">Uso Mixto Residencial</label>
                            <input id="residentialMixed" name="residentialMixed" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="industry">Industria</label>
                            <input id="industry" name="industry" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="trailerEntrance">Entrada para Remolque</label>
                            <input id="trailerEntrance" name="trailerEntrance" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="maneuveringYard">Patio de Maniobras</label>
                            <input id="maneuveringYard" name="maneuveringYard" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="loadingArea">Área de Carga</label>
                            <input id="loadingArea" name="loadingArea" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="office">Oficina</label>
                            <input id="office" name="office" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="dock">Muelle</label>
                            <input id="dock" name="dock" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="railway">Ferrocarril</label>
                            <input id="railway" name="railway" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="officeArea">Área de Oficina</label>
                            <input id="officeArea" name="officeArea" type="number" step="0.01" />
                        </div>
                        <div className="item">
                            <label htmlFor="crossdock">Crossdock</label>
                            <input id="crossdock" name="crossdock" type="checkbox" className='option-input' />
                        </div>
                        <div className="item">
                            <label htmlFor="houseWarehouse">Almacén</label>
                            <input id="houseWarehouse" name="houseWarehouse" type="checkbox" className='option-input' checked={wareHouse} onChange={handleCheckboxChange} />
                        </div>
                        {wareHouse > 0 && 
                            <>
                                <div className="item">
                                    <label htmlFor="warehouseArea">Área de Almacenamiento</label>
                                    <input id="warehouseArea" name="warehouseArea" type="number" step="0.01" />
                                </div>
                                <div className="item">
                                    <label htmlFor="warehouseHeight">Altura del Almacén</label>
                                    <input id="warehouseHeight" name="warehouseHeight" type="number" step="0.01" />
                                </div>
                            </>
                        }
                        <button className="sendButton">Agregar</button>
                    </form>
                </div>
            </div>
            <div className="sideContainer">
                <UploadImage id={0} multipleUploads={true} bare={false} setState={setImages} ></UploadImage>
            </div>
        </div>
    );
}

export default NewProperty;