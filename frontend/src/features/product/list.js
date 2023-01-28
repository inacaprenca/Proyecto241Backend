import React, { useState } from "react";
import { useGetProductsQuery } from "./productApi";
import CardComp from '../../components/Card';
import ProductSkeleton from './productSkeleton';
import Product from '../product';
import { Row, Col, Space, Skeleton, Input } from 'antd';
import CarouselComp from '../../components/Carousel';
import { v4 as uuid } from "uuid";
import './styles.css';

export const ProductList = () => {
    const { data = [], error, isLoading } = useGetProductsQuery();
    const [modalProduct, setModalProduct] = useState(false);
    const [item, setItem] = useState({});
    const [texto, setTexto] = useState('TU EMPRESA');
    const ToogleModal = () => setModalProduct(!modalProduct);
    const onAddToCart = (e,id) => {
        e.stopPropagation();
        console.log('boton',id);
    }
    const onClick = (id) => {
        console.log('card',id);
    }
    const handleInput = (e) => {
        e.preventDefault();
        setTexto(e.target.value);
    }
    const showModalProduct = (item,e) => {
       // e.stopPropagation();
        setModalProduct(true);
        setItem(item);
        console.log("MODAL", item)
    }
    if (isLoading) return <ProductSkeleton loading={isLoading} />
    if (!data) return <div>Ooops! Data not found</div>
    return (
        <div className="card-wrapper">
            <Product show={modalProduct} close={()=>ToogleModal()} items={item} />
            <Row key={uuid()} gutter={[24, 16]} className="card-row">

                    {
                        data.map((item, index) => {
                            return (
                                <Col key={uuid()}>
                                    <CardComp key={index} data={item} onAddToCart={onAddToCart} onClick={(e)=>{showModalProduct(item,e)}} />
                                </Col>
                           )
                        })
                    }
            </Row>
        </div>
    )
}

export default ProductList;