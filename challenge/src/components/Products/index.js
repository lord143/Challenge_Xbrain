import React from "react";
import { Container} from "@mui/material";
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { productsSelector } from "../../store/products";
import Item from "../Item";

import Card from '@mui/material/Card';

export default function Products() {
  const items = useSelector(productsSelector);
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={4} md={4}>
            <Card
                sx={{ height: '100%',
                      display: 'flex', 
                      flexDirection: 'column',
                      flexGrow: 1
                      }}
                >
                <Item item={item}/>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
