import { Container, Typography } from "@mui/material";
import { axiosInstance } from "../utils";
import ProductContainer from "../components/ProductContainer";

export const loader = async () => {
  const req = await axiosInstance("/product");
  return req.data;
};

function Home() {
  return (
    <section>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{ mb: 5, alignItems: "center", justifyContent: "center" }}
        >
          Products :
        </Typography>
      </Container>
      <ProductContainer />
    </section>
  );
}

export default Home;
