import React from "react";
import { Container} from "@mui/material";
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { productsSelector } from "../../store/products";
import Item from "../Item";

export default function Products() {
  const items = useSelector(productsSelector);
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={4} md={4}>
            <Item item={item}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
