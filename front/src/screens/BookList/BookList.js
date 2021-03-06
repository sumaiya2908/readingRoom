import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {bookUpdate,bookList} from '../../actions/adminActions';
import axios from 'axios';

const BookList = ({ match, history }) => {
  const bookId = match.params.id;

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [authorName, setAuthorName] = useState('')
  const [category,setCategory] = useState('');
  const [numInStock, setNumInStock] = useState(0);

  const userDetails = useSelector((state) => state.adminDetails);
  const { loading, error, user } = adminDetails;
  const bookDetails = useSelector((state) => state.productDetails);
  const { loading: loadingProduct, error: errorProduct, product } = productDetails;

  const adminUpdateProduct = useSelector((state) => state.adminUpdateProduct);
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = adminUpdateProduct;

  useEffect(() => {
    if (successUpdate && !fileRejections.length) {
      dispatch({ type: ADMIN_UPDATE_PRODUCT_RESET });
      history.push('/admin/productlist');
    } else {
      if (!product || !product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setDetail(product.detail);
        setPrice(product.price);
        setNumInStock(product.numInStock);
        setCategory(product.category);
        setImage(product.image);
      }
    }
  }, [dispatch, history, product]);

  const onDrop = useCallback((acceptedFiles) => {
    uploadFileHandler(acceptedFiles);
  }, []);

  const { acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive } = useDropzone({ accept: 'image/jpeg, image/png', onDrop });

  const uploadFileHandler = async (acceptedFiles) => {
    if (acceptedFiles.length) {
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };

        const { data } = await axios.post(`/api/upload`, formData, config);
        setImage(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const file = acceptedFiles.map((file) => (
    <div key={file.path}>
      {file.path} - {file.size} bytes
    </div>
  ));

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(adminProductUpdate({ _id: productId, name, price, category, numInStock, image, detail }));
  };

  return (
    <>
      {loadingProduct && <Loader />}
      {errorProduct && <Message variant='danger'>{errorProduct}</Message>}
      {loadingProduct ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <FormContainer>
          <h1>Edit your Product Details</h1>
          <Form onSubmit={(e) => submitHandler(e)} loading={loadingProduct}>
            <Form.Input size='large' icon='shopping basket' iconPosition='left' label='Name' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
            <Form.TextArea size='large' label='Datail' placeholder='Detail' onChange={(e) => setDetail(e.target.value)} value={detail} style={{ height: '150px' }} />

            <Form.Input size='large' icon='rupee sign' iconPosition='left' label='Price' type='text' placeholder='Price' onChange={(e) => setPrice(e.target.value)} value={price} />
            <Form.Input size='large' icon='hashtag' iconPosition='left' label='Category' type='text' placeholder='Category' onChange={(e) => setCategory(e.target.value)} value={category} />
            <Form.Input size='large' icon='hashtag' iconPosition='left' label='NumInStock' type='text' placeholder='NumInStock' onChange={(e) => setNumInStock(e.target.value)} value={numInStock} />

            <Form.Input size='large' icon='image outline' iconPosition='left' label='Image' type='text' value={image} />

            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop image file here, or click to select files. (Only *.jpeg and *.png)</p>}
            </div>

            {acceptedFiles.length ? <Message positive>Accepted. {file}</Message> : null}
            {fileRejections.length ? <Message negative>This image format is not supported. Only *.jpeg and *.png images will be accepted</Message> : null}

            <Button color='black' type='submit' style={{ width: '100%' }}>
              Update
            </Button>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default AdminProductEditScreen;
