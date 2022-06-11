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
        sx={{height: 400,
          width: 220,
          maxHeight: { xs: 400, md: 500 },
          maxWidth: { xs: 200, md: 450 }}}/>

      <Card sx={{ flexGrow: 1,  }} align="center">
        <Typography gutterBottom variant="h5" component="h2">
          <h5 className="card-title">{item.title}</h5>   
        
          <h6 className="card-subtitle mb-2 text-muted">
            {formatPrice(item.price)}
          </h6>
        </Typography>
        
        <Typography>
          <p className="card-text">{item.description}</p>
        </Typography>

        <Typography sx={{flexGrow: 1,align:"center"}}>
          <Link
            href="LINK"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addItem(item));
            }}>
            Adicionar 
            <ShoppingCartIcon/>
          </Link>
        </Typography>
      </Card>
    </Typography>
  );
}