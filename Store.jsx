const { Card, Accordion, Button, Container, Row, Col, Image, Input } =
  ReactBootstrap;

// simulate getting products from DataBase
const products = [
  {
    id: 1,
    attributes: {
      name: "Apples__",
      country: "Italy",
      cost: 3,
      in_stock: 10,
    },
  },
  {
    id: 2,
    attributes: {
      name: "Oranges",
      country: "Spain",
      cost: 4,
      in_stock: 3,
    },
  },
  {
    id: 3,
    attributes: {
      name: "Beans",
      country: "USA",
      cost: 2,
      in_stock: 8,
    },
  },
  {
    id: 4,
    attributes: {
      name: "Cabbage",
      country: "USA",
      cost: 1,
      in_stock: 8,
    },
  },
];

// Custom hook to fetch data
const useDataApi = (initialUrl, initialData) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
};

// Reducer for data fetching
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

// Main Products component
const Store = () => {
  const [items, setItems] = React.useState(products);
  const [cart, setCart] = React.useState([]);
  const [query, setQuery] = React.useState(
    "http://localhost:1337/api/products"
  );
  const [{ data, isLoading, isError }, doFetch] = useDataApi(query, {
    data: [],
  });

  //  Fetch Data from API
  React.useEffect(() => {
    doFetch(query);
    if (data.data.length > 0) {
      setItems(data.data);
    }
  }, [query, data]);

  // Add item to cart and update quantity in stock
  const addToCart = (e) => {
    const name = e.target.name;
    const item = items.find((product) => product.attributes.name === name);

    if (item && item.attributes.in_stock > 0) {
      setCart([...cart, item]);
      setItems((prevItems) =>
        prevItems.map((product) => {
          if (
            product.attributes.name === name &&
            product.attributes.in_stock > 0
          ) {
            return {
              ...product,
              attributes: {
                ...product.attributes,
                in_stock: product.attributes.in_stock - 1,
              },
            };
          }
          return product;
        })
      );
    } else {
      alert("Out of stock!");
    }
  };

  // Delete item from cart and update the stock
  const deleteCartItem = (index) => {
    const deletedItem = cart[index];
    let newCart = cart.filter((item, i) => index != i);
    setCart(newCart);

    if (deletedItem) {
      setItems((prevItems) =>
        prevItems.map((product) => {
          if (product.attributes.name === deletedItem.attributes.name) {
            return {
              ...product,
              attributes: {
                ...product.attributes,
                in_stock: product.attributes.in_stock + 1,
              },
            };
          }
          return product;
        })
      );
    }
  };

  const photos = [
    "images/apple.png",
    "images/orange.png",
    "images/beans.png",
    "images/cabbage.png",
  ];

  let list = items.map((item, index) => {
    return (
      <Col key={index} xs={12} sm={6} md={3} className="mb-3 mb-md-0">
        <Card>
          <Card.Img src={photos[index % 4]} variant="top"></Card.Img>
          <Card.Body>
            <Card.Title>{item.attributes.name}</Card.Title>
            <Card.Text>${item.attributes.cost}/each</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            <small>Only {item.attributes.in_stock} in stock!</small>
          </Card.Footer>
          <button
            name={item.attributes.name}
            type="submit"
            onClick={addToCart}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </Card>
      </Col>
    );
  });

  let cartList = cart.map((item, index) => {
    return (
      <Row key={1 + index} className="align-items-center">
        <Col sm={8}>
          1 x {item.attributes.name} from {item.attributes.country}
        </Col>

        <Col className="text-right">$ {item.attributes.cost}</Col>

        <Col
          onClick={() => deleteCartItem(index)}
          className="btn btn-link text-right"
        >
          Delete
        </Col>
      </Row>
    );
  });

  let finalList = () => {
    let total = cart.reduce((total, item) => total + item.attributes.cost, 0);
    let final = cart.map((item, index) => {
      return (
        <div key={index} index={index}>
          {item.name}
        </div>
      );
    });
    return { final, total };
  };

  // Clear cart + restock products
  const checkOut = () => {
    setCart([]);
    restockProducts(query);
  };

  // TODO: implement the restockProducts function
  //   Here’s how the reset stock feature works:
  // There’s an input field on the page that contains the URL to the Strapi back end
  // When a user clicks the “ReStock Products” button, a call is made to the Strapi back end specified in the input field
  // The result of this call is an updated list of products
  //   Hints:
  // Make use of the “doFetch” function to make a call to the API
  // Make use of “setItems” to update the existing items
  const restockProducts = (url) => {
    console.log(`Restocking Products ${url}`);
    doFetch(url);
  };

  return (
    <Container>
      <Row className="mb-5">
        <h3>Product List</h3>
        <Row>{list}</Row>
      </Row>

      <Row className="d-flex flex-column mb-5">
        <h3>Cart Contents</h3>
        <Col>{cartList}</Col>
        <p className="font-weight-bold text-uppercase text-right">
          Total: $ {finalList().total}
        </p>
        <Row className="justify-content-end" style={{ gap: "1rem" }}>
          <Button onClick={checkOut}>CheckOut</Button>
        </Row>
        <div> {finalList().total > 0 && finalList().final} </div>
      </Row>
    </Container>
  );
};
// ========================================
ReactDOM.render(<Store />, document.getElementById("root"));
