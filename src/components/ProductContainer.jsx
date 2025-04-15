import { Box, Container } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";

function ProductContainer() {
  const { products } = useLoaderData();
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 5,
        }}
      >
        {products.map((product) => {
          return <ProductCart product={product} />;
        })}
      </Box>
    </Container>
  );
}

export default ProductContainer;
