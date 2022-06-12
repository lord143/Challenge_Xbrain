import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart";
import { formatPrice } from "../../utils/format-price";

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from '@mui/material/Link';

export default function Item({ item }) {
  const dispatch = useDispatch();

  return (
    <Typography align="center">
      <Card
        component="img"
        src={item.image}
        sx={{height: 320,
            width: 200,
            flex: 1
             }}/>

      <Card sx={{ flexGrow: 1, flexWrap: 1  }} align="center">
        <Card className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {formatPrice(item.price)}
          </h6>
          <p className="card-text">{item.description}</p>
          <a
            href="LINK"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addItem(item));
            }}
          >
            Adicionar <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </a>
        </Card>
      </Card>
    </Typography>
  );
}