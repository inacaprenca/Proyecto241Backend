import { Button, Drawer, Divider, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from "../product/productApi";
import { v4 as uuid } from "uuid";
import UploadLogo from './uploadLogo'
const App = (props) => {
  const { data = [], error, isLoading } = useGetCategoriesQuery();
  const [open, setOpen] = useState(props.showDrawer);
  console.log(props.showDrawer)
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const onChange = e => {
    console.log(e.target.value);
  };
  useEffect(() => {
    setOpen(props.showDrawer)
  }, [props.showDrawer])
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };
  const handleAddCategory = () => {
    console.log('add category')
  }
  return (
    <>
      <Drawer title="HOLA!" width={520} closable={false} onClose={onClose} open={open} placement="left">

        {
          data.map((item) => (
            <div key={uuid()} className='menu-item' onClick={showChildrenDrawer}> <img className='menu-icon' src={`/assets/icons/${item.image}`}></img> {item.title}</div>
          ))}


        <Divider onClick={handleAddCategory} className="menu-icon-add"><PlusCircleOutlined /> <span>Agregar</span> </Divider>
        <UploadLogo />
        <Input showCount maxLength={40} onChange={onChange} />

        <Button type="primary" onClick={showChildrenDrawer}>
          Guardar
        </Button>
        <Drawer
          title="Categorías - Tienda Stock  "
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          placement="left"
        >
          <h3>COMIDA</h3>
          <ul>
            <li>Completos</li>
            <li>Italiano</li>
            <li>Hamburguesas</li>
            <li>Churrascos</li>
            <li>Papas fritas</li>
            <li>Salchipapas</li>
            <li> Hans roll</li>
            <li>Sushi</li>
            <li> Fajitas</li>
            <li> Sándwich</li>
            <li> Pollo asado</li>
            <li> Pollo a la broster</li>
            <li> Sopaipillas</li>
            <li>Anticuchos</li>
            <li>Brochetas</li>
            <li> Humitas</li>
            <li>Arepas</li>
            <li>Pizza</li>
            <li>Churros</li>
            <li> Cabritas</li>
            <li> Colaciones</li>
            <li>Almuerzos</li>
            <li>Perros calientes</li>
            <li>Choripán</li>
            <li>Ceviche</li>
          </ul>
          <h3>BEBESTIBLES</h3>
          <h3>HELADOS</h3>
          <h3>EMPANADAS</h3>
          <h3>MASCOTAS</h3>
          <h3>PELUQUERIA</h3>
          <h3>ALMACÉN</h3>
          <h3>FRUTAS Y VERDURAS</h3>
          <h3>PAN Y PASTELERIA</h3>
          <h3>AVISOS</h3>
          <h3>AUTOMOVIL</h3>
          <h3>COMBUSTIBLES</h3>

        </Drawer>
      </Drawer>
    </>
  );
};

const AddCategory = () => {
  return (
    <div>
      <h1>hola</h1>
    </div>
  )
}
export default App;