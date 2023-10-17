/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import ProductCard from './ProductCard';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ViewProducts() {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            await axios.get('http://localhost:3001/api/v1/products/all')
                .then(function (response) {
                    console.log(response.data);
                    setProducts(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        fetchData();

    }, []);


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {products.map((oneproduct) => (
                            <Grid item key={oneproduct._id} xs={12} sm={6} md={4}>
                                <ProductCard data={oneproduct} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}

            {/* End footer */}
        </ThemeProvider>
    );
}