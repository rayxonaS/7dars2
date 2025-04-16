import { Box, Container } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";
import { motion } from "framer-motion";

const itemVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

const container = {
  hidden: { rotate: 90 },
  show: {
    rotate: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

function ProductContainer() {
  const { products } = useLoaderData();
  return (
    <Container maxWidth="xl">
      <motion.div variants={container} initial="hidden" animate="show">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 5,
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariant}
              style={{ borderRadius: 20, backgroundColor: "#fff" }}
            >
              <ProductCart product={product} />
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
}

export default ProductContainer;
