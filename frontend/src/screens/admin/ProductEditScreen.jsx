import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useUpdateProductMutation, useGetProductDetailsQuery, useUploadProductImageMutation } from '../../slices/productsApiSlice';

const ProductEditScreen = () => {

  const { id: productId } = useParams();
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
 
  const {data:product, isLoading, error} = useGetProductDetailsQuery(productId);
  const [updateProduct, { isLoading: loadingUpdate}] = useUpdateProductMutation();
  const [updateProductImage, {isLoading: loadingUpload}] = useUploadProductImageMutation();

  const navigate = useNavigate();
  
  useEffect(() => {
    if(product){
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
    }
  },[product]);

  const submitHandler = async (e) => {
    console.log("Triggered");
    e.preventDefault();
    const updatedProduct = {
        _id:productId,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description
    };
    const result = await updateProduct(updatedProduct);
    if(result.error){
        toast.error(result.error);
    }else{
        toast.success("Product updated successfully");
        navigate("/admin/productlist");
    }
  }

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await updateProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error); 
    }
  }

  return (
    <>
      <Link to="/admin/productlist" className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        { loadingUpdate && <Loader />}
        { isLoading ? <Loader /> : error  ? <Message variant='danger'>{error}</Message> : (
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                    type='number'
                    placeholder='Enter Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='image'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                  type='text'
                  placeholder='Enter image url'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  ></Form.Control>
                  <Form.Control
                  type='file'
                  label='Choose file'
                  onChange={uploadFileHandler}
                  ></Form.Control>
                </Form.Group>

                {loadingUpload && <Loader />}

                <Form.Group className='my-2' controlId='brand'>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter Brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='countInStock'>
                    <Form.Label>Count In Stock</Form.Label>
                    <Form.Control
                    type='number'
                    placeholder='Enter countInStock'
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='category'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button
                variant='primary'
                type='submit'
                className='my-2'
                >Update</Button>
            </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen