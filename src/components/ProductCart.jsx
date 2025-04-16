import {
  addToCart,
  decrementAmount,
  incrementAmount,
} from "../app/features/CartSlice";
import { useDispatch, useSelector } from "react-redux";

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

const itemA = {
  hidden: { scale: 0, top: 100 },
  show: { scale: 1, top: 30 },
};

const itemB = {
  hidden: { scale: 0, top: 200 },
  show: { scale: 1, top: 80 },
};

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
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const isAdded = cart.find((i) => i.id == product.id);
  const handleBuy = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        ...product,
        amount: 1,
      })
    );
  };

  const handleQuantityChange = (id, isIncrement) => {
    if (isIncrement) {
      dispatch(incrementAmount(id));
    } else {
      dispatch(decrementAmount(id));
    }
  };
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
                {isAdded && (
                  <>
                    <IconButton
                      onClick={() => handleQuantityChange(product.id, false)}
                      color="primary"
                      size="small"
                    >
                      <FiMinus />
                    </IconButton>
                    <Typography>{isAdded.amount}</Typography>
                    <IconButton
                      onClick={() => handleQuantityChange(product.id, true)}
                      color="primary"
                      size="small"
                    >
                      <FiPlus />
                    </IconButton>
                  </>
                )}
                <Button
                  onClick={handleBuy}
                  variant="contained"
                  color="primary"
                  sx={{ ml: 2 }}
                >
                  {isAdded ? "In Cart" : "Add to Cart"}
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
