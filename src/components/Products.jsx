import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    //     useEffect(() => {
    //         const getProducts = async () => {
    //             try {
    //                 const res = await axios.get(
    //                     'http://localhost:5000/ECOMMERCEAPI/product'
    //                 );
    //                 console.log(res);
    //                 // setProducts(res.data);
    //             } catch (err) {}
    //         };
    //         getProducts();
    //     }, [cat]);

    // useEffect(() => {
    //     cat &&
    //         setFilteredProducts(
    //             products.filter((item) =>
    //                 Object.entries(filters).every(([key, value]) =>
    //                     item[key].includes(value)
    //                 )
    //             )
    //         );
    // }, [products, cat, filters]);

    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
