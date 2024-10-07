//import React, { useState, useEffect } from 'react';
//import { apiClient } from '../../common/Axios/auth';

//const ProductForm = ({ id, onClose, onProductUpdated }) => { // Added onProductUpdated prop
//    const [product, setProduct] = useState({
//        productName: '',
//        description: '',
//        price: '',
//        stockQuantity: '',
//        categoryID: '',
//        sellerID: '',
//        imageUrl: '',
//    });
//    const [categories, setCategories] = useState([]);
//    const [sellers, setSellers] = useState([]);
//    const [errors, setErrors] = useState({});

//    useEffect(() => {
//        if (id) {
//            fetchProduct(id);
//        }
//        fetchCategories();
//        fetchSellers();
//    }, [id]);

//    const fetchProduct = async (id) => {
//        try {
//            const response = await apiClient.get(`/Product/${ id }`);
//            setProduct(response.data);
//        } catch (error) {
//            console.error('Error fetching product:', error);
//        }
//    };

//    const fetchCategories = async () => {
//        try {
//            const response = await apiClient.get('/Categories/names');
//            setCategories(response.data.$values.map(d => ({ id: d.categoryID, name: d.categoryName })));
//        } catch (error) {
//            console.error('Error fetching categories:', error);
//        }
//    };

//    const fetchSellers = async () => {
//        try {
//            const response = await apiClient.get('/Seller/list'); // Replace with your actual sellers endpoint
//            setSellers(response.data.$values.map(d => ({ id: d.sellerID, name: d.companyName })));
//        } catch (error) {
//            console.error('Error fetching sellers:', error);
//        }
//    };

//    const handleInputChange = (e) => {
//        const { name, value } = e.target;
//        setProduct({
//            ...product,
//            [name]: value,
//        });
//    };

//    const handleSubmit = async (e) => {
//        e.preventDefault();
//        try {
//            if (id) {
//                await apiClient.put(`/Product/${id}`, product); // Update existing product
//            } else {
//                await apiClient.post('/Product', product); // Create new product
//            }
//            onProductUpdated(); // Call this function to update the product list dynamically
//            onClose();
//        } catch (error) {
//            if (error.response && error.response.data) {
//                setErrors(error.response.data.errors || {});
//            }
//            console.error('Error saving product:', error);
//        }
//    };

//    return (
//        <div className="container mx-auto px-4 py-6">
//            <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Product' : 'Add New Product'}</h2>
//            <form onSubmit={handleSubmit}>
//                <div className="mb-4">
//                    <label className="block text-gray-700">Product Name</label>
//                    <input
//                        type="text"
//                        name="productName"
//                        value={product.productName}
//                        onChange={handleInputChange}
//                        className="border rounded p-2 w-full"
//                        required
//                    />
//                    {errors.productName && <p className="text-red-500">{errors.productName}</p>}
//                </div>
//                <div className="mb-4">
//                    <label className="block text-gray-700">Description</label>
//                    <textarea
//                        name="description"
//                        value={product.description}
//                        onChange={handleInputChange}
//                        className="border rounded p-2 w-full"
//                        rows="4"
//                    />
//                    {errors.description && <p className="text-red-500">{errors.description}</p>}
//                </div>

//                <div className="mb-4">
//                    <label className="block text-gray-700">Price</label>
//                    <input
//                        type="number"
//                        name="price"
//                        value={product.price}
//                        onChange={handleInputChange}
//                        className="border rounded p-2 w-full"
//                        required
//                    />
//                    {errors.price && <p className="text-red-500">{errors.price}</p>}
//                </div>

//                <div className="mb-4">
//                    <label className="block text-gray-700">Stock Quantity</label>
//                    <input
//                        type="number"
//                        name="stockQuantity"
//                        value={product.stockQuantity}
//                        onChange={handleInputChange}
//                        className="border rounded p-2 w-full"
//                        required
//                    />
//                    {errors.stockQuantity && <p className="text-red-500">{errors.stockQuantity}</p>}
//                </div>

//                <div className="mb-4">
//                    <label className="block text-gray-700">Category</label>
//                    <select
//                        name="categoryID"
//                        value={product.categoryID}
//                        onChange={handleInputChange}
//                        className="border rounded p-2 w-full"
//                        required
//                    >
//                        <option value="">Select Category</option>
//                        {categories.map(category => (
//                            <option key={category.id} value={category.id}>
//                                {category.name}
//                            </option>
//                        ))}
//                    </select>
//                    {errors.categoryID && <p className="text-red-500">{errors.categoryID}</p>}
//                </div>

//                <div className="mb-4">
//                    <label className="block text-gray-700">Seller</label>
//                    <select
//                        name="sellerID"
//                        value={product.sellerID}
//                        onChange={handleInputChange}
//                        className="border rounded p-2 w-full"
//                        required
//                    >
//                        <option value="">Select Seller</option>
//                        {sellers.map(seller => (
//                            <option key={seller.id} value={seller.id}>
//                                {seller.name}
//                            </option>
//                        ))}
//                    </select>
//                    {errors.sellerID && <p className="text-red-500">{errors.sellerID}</p>}
//                </div>

//                <div className="mb-4">
//                    <label className="block text-gray-700">Image URL</label>
//                    <input
//                        type="text"
//                        name="imageUrl"
//                        value={product.imageUrl}
//                        onChange={handleInputChange}
//                        className="border rounded p-2 w-full"
//                    />
//                    {errors.imageUrl && <p className="text-red-500">{errors.imageUrl}</p>}
//                </div>

//                <div className="flex justify-between">
//                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//                        {id ? 'Update Product' : 'Add Product'}
//                    </button>
//                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
//                        Cancel
//                    </button>
//                </div>
//            </form>
//        </div>
//    );
//};

//export default ProductForm;

import React, { useEffect, useState } from 'react';
import { CloudUpload } from '@mui/icons-material'; // Icon for the upload button
import { TextField, Button, Grid, Typography, MenuItem, Select, FormControl, InputLabel, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { apiClient } from '../../common/Axios/auth';
import 'C:\\Sriram\\MONDAYSHopsilo\\ShopSiloAppFSD\\shopsiloappfsd.client\\src\\components\\seller\\Home\\Product\\ProductForm.css'; // Adjust path according to your setup

const ProductAddForm = () => {
    const [productData, setProductData] = useState({
        productName: '',
        description: '',
        price: '',
        stockQuantity: '',
        categoryID: '',
        subCategoryID: '',
        categoryName: '',
        subCategoryName: '',
        sellerId: ''
    });
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [sellers, setSellers] = useState([]); // State for sellers
    const [selectedSeller, setSelectedSeller] = useState(''); // State for selected seller

    // Snackbar states
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiClient.get('/Categories/names');
                setCategories(response.data.$values);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchSellers = async () => {
            try {
                const response = await apiClient.get('/Seller/list');
                setSellers(response.data.$values); // Set sellers from the response data
            } catch (error) {
                console.error('Error fetching sellers:', error);
            }
        };

        fetchCategories();
        fetchSellers();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = categories.find(category => category.categoryName === e.target.value);
        setProductData({
            ...productData,
            categoryID: selectedCategory.categoryID,
            categoryName: selectedCategory.categoryName,
            subCategoryID: '',
            subCategoryName: ''
        });
        setSubCategories(selectedCategory.subCategories.$values);
    };

    const handleSubCategoryChange = (e) => {
        const selectedSubCategory = subCategories.find(subCategory => subCategory.categoryName === e.target.value);
        setProductData({ ...productData, subCategoryID: selectedSubCategory.categoryID, subCategoryName: selectedSubCategory.categoryName });
    };

    const handleSellerChange = (e) => {
        const sellerId = sellers.find(seller => seller.companyName === e.target.value).sellerID;
        setSelectedSeller(e.target.value);
        setProductData({ ...productData, sellerId: sellerId });
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productData.productName);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('stockQuantity', productData.stockQuantity);
        formData.append('categoryID', productData.categoryID);
        formData.append('subCategoryID', productData.subCategoryID);
        formData.append('categoryName', productData.categoryName);
        formData.append('image', image);
        formData.append('sellerId', productData.sellerId); // Append seller ID

        try {
            const response = await apiClient.post('/Product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Product Data:', productData);
            console.log('Image:', image);
            console.log('Product added successfully:', response.data);
            setSnackbarMessage('Product added successfully!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);

            // Redirect to product list after 5 seconds
            setTimeout(() => {
                navigate('/admin/products'); // Adjust the path according to your routing setup
            }, 5000);
        } catch (error) {
            console.error('Error adding product:', error);
            setSnackbarMessage('Error adding product. Please try again.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="m-5">
            <Typography variant="h5" style={{ marginBottom: '30px', color: 'blue', fontWeight: 'bold', marginLeft: '3px' }}>Add New Product</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Product Name"
                        variant="outlined"
                        fullWidth
                        name="productName"
                        value={productData.productName}
                        onChange={handleInputChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        name="description"
                        value={productData.description}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Price"
                        variant="outlined"
                        fullWidth
                        name="price"
                        type="number"
                        value={productData.price}
                        onChange={handleInputChange}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Stock Quantity"
                        variant="outlined"
                        fullWidth
                        name="stockQuantity"
                        type="number"
                        value={productData.stockQuantity}
                        onChange={handleInputChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="category-select-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            value={productData.categoryName}
                            onChange={handleCategoryChange}
                            required
                        >
                            {categories.map(category => (
                                <MenuItem key={category.categoryID} value={category.categoryName}>
                                    {category.categoryName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                {subCategories.length > 0 && (
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="subcategory-select-label">Subcategory</InputLabel>
                            <Select
                                labelId="subcategory-select-label"
                                value={productData.subCategoryName}
                                onChange={handleSubCategoryChange}
                                required
                            >
                                {subCategories.map(subCategory => (
                                    <MenuItem key={subCategory.categoryID} value={subCategory.categoryName}>
                                        {subCategory.categoryName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="seller-select-label">Seller</InputLabel>
                        <Select
                            labelId="seller-select-label"
                            value={selectedSeller}
                            onChange={handleSellerChange}
                            required
                        >
                            {sellers.map(seller => (
                                <MenuItem key={seller.sellerID} value={seller.companyName}>
                                    {seller.companyName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }} // Hides the default input
                        id="contained-button-file"
                        type="file"
                        onChange={handleImageChange}
                        required
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span" startIcon={<CloudUpload />}>
                            Upload Image
                        </Button>
                    </label>
                    {image && (
                        <Typography variant="body2" style={{ marginTop: '10px' }}>
                            {image.name} selected
                        </Typography>
                    )}
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Add Product
                    </Button>
                </Grid>
            </Grid>

            {/* Snackbar for notifications */}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </form>
    );
};

export default ProductAddForm;