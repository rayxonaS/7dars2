import { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Stack,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { FiMinus, FiPlus } from "react-icons/fi";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "20px 0",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

function ProductCart({ product }) {
  return (
    <div>
      <StyledCard key={product.id}>
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", md: "300px" },
            height: { xs: "200px", md: "250px" },
            objectFit: "cover",
          }}
          image={product.thumbnail}
          alt={product.title}
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1634655377962-e6e7b446e7e9";
          }}
        />
        <CardContent sx={{ flex: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" component="h2" gutterBottom>
                {product.title.slice(0, 15)}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {product.description.slice(0, 100)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                ${product.price.toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="flex-start"
              >
                <IconButton
                  onClick={() => handleQuantityChange(product.id, false)}
                  color="primary"
                  size="small"
                >
                  <FiMinus />
                </IconButton>
                <Typography>{product.discountPercentage}</Typography>
                <IconButton
                  onClick={() => handleQuantityChange(product.id, true)}
                  color="primary"
                  size="small"
                >
                  <FiPlus />
                </IconButton>
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                  Add to Cart
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </div>
  );
}

export default ProductCart;
