const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjg2NGQ0YmUzZDAwMTU4NDYwMWEiLCJpYXQiOjE2NjgwODU4NjEsImV4cCI6MTY2OTI5NTQ2MX0.dScw6478XOLngE_XoEBv65SaC9agW9OGQhwrpVvQsII",
};

loadProducts = async () => {
  let data = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: headers,
    }
  );
  console.log(data);
};

// Function that is called on the "Submit Button"
const handleSubmit = async (event) => {
  event.preventDefault();

  const newProduct = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("product-brand").value,
    imageUrl: document.getElementById("image-src").value,
    price: document.getElementById("price").value,
  };

  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: headers,
    }
  );
  try {
    if (!response.ok) throw new Error("Generic error!");
    if (response.ok) {
      const event = await response.json();
      alert("Event created successfully!");
    }
  } catch (error) {
    alert("Something went wrong, " + error);
  }
};
