import React from "react";
import Cart from "../../components/Cart";
import Layout from "../../components/Layout";
import SimpleForm from "../../components/Form"

export default function CartPage() {
  return (
    <Layout>
      <Cart />
      <SimpleForm/>
    </Layout>
  );
}
