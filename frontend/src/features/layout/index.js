import React from 'react';
import SearchComp from '../../components/Search';
import { Space, Row, Col, Affix, Popover } from 'antd';
import './styles.css';
import { ShoppingCartOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons';
import ContentComp from '../../components/Content'
import MenuComp from '../Menu'
import SignInOut from '../SignInOut'

const App = () => {

    return (
        <>
            <div className="header">
                <div className='terminos'>
                    TERMINOS Y CONDICIONES | PREGUNTAS FRECUENTES | SIGUE TU PEDIDO
                </div>
                <Affix offsetTop={0}>
                    <div className='menu'>
                        <Row justify="space-around" align="middle">
                            <Col flex={3}>
                                <Space direction="horizontal" >
                                    <div className='logo'>
                                        <img src='../../assets/logogyg.png' className="logo" alt='logo' />
                                    </div>
                                    <MenuComp />
                                </Space>
                            </Col>
                            <Col flex={4}>
                                <SearchComp />
                            </Col>
                            <Col flex={5}>
                                <Space direction="horizontal" >
                                    <div id="g-signin"></div>
                                    <Popover
                                        placement="bottom"
                                        content={<SignInOut />}
                                    >
                                        <UserOutlined className='icono-user' />LOGIN
                                    </Popover>


                                    <ShoppingCartOutlined className='icono-carrito' />
                                    <div><FileTextOutlined className='icono-documento' />COTIZACIONES</div>
                                </Space>
                            </Col>
                        </Row>
                        <div>
                        </div>
                    </div>
                </Affix>
                <div className='promo'>
                    TELA IMPRESA 10oz A SOLO $4.990 DEPACHO GRATIS POR COMPRAS SOBRE $39.000
                </div>
            </div>
            <div className="content">
                <div className="decorated">
                    <span>Tienda Stock </span>
                </div>
                <div className="decorated">
                    <span>Etiquetas y Stickers </span>
                </div>
                <div className="decorated">
                    <span>Pendones y Gigantografías </span>
                </div>
                <div className="decorated">
                    <span>Branding </span>
                </div>
                <ContentComp />
            </div>
            <div className="footer">
                <div className='footer-1'>
                    <div className='footer-descripcion'>
                        IMPRESORES SOLUCIONES GRÁFICAS <br />
                        impresión digital de gran formato catálogos,
                        flyers, tarjetas visita. imprenta digital en
                        santiago e impresión online. empresa
                        especializada. alta tecnología. servicio a medida.
                    </div>
                    <div className='footer-rrss'>
                        LOGO 1, LOGO 2, LOGO 3, LOGO 4
                    </div>
                </div>
                <div className='footer-direccion'>
                    +562 2256 7902 | info@gygimpresores.cl | Santa Rosa 2224 Santiago, Región Metropolitana
                    https://goo.gl/maps/sqPmTdNoRg4QBJzd7
                </div>
            </div>
        </>
    );

}
export default App;