const express = require("express");

const router = express.Router();
const PORT = process.env.PORT;
router.get("/", (req, res) => {
  res.json({
    user: {
      getall: `http://localhost:${PORT}/api/v1/user/getallusers`,
      adduser: `http://localhost:${PORT}/api/v1/user/adduser`,
      deleteUser: `http://localhost:${PORT}/api/v1/user/delete/:id`,
      updateUser: `http://localhost:${PORT}/api/v1/user/update/:id`,
    },
    company: {
      getall: `http://localhost:${PORT}/api/v1/company/getallcompany`,
      addcompany: `http://localhost:${PORT}/api/v1/company/addcompany`,
      deletecompany: `http://localhost:${PORT}/api/v1/company/delete/:id`,
      updateCompany: `http://localhost:${PORT}/api/v1/company/update/:id`,
    },
    product: {
      getall: `http://localhost:${PORT}/api/v1/product/getallproduct`,
      addproduct: `http://localhost:${PORT}/api/v1/product/addproduct`,
      deleteproduct: `http://localhost:${PORT}/api/v1/product/delete/:id`,
    },
    category: {
      getall: `http://localhost:${PORT}/api/v1/category/getallcategory`,
      addcategory: `http://localhost:${PORT}/api/v1/category/addcategory`,
      deletecategory: `http://localhost:${PORT}/api/v1/category/delete/:id`,
    },
    client: {
      getall: `http://localhost:${PORT}/api/v1/client/getallclient`,
      addcalient: `http://localhost:${PORT}/api/v1/client/addclient`,
      deleteclient: `http://localhost:${PORT}/api/v1/client/delete/:id`,
    },
    devis:{
      getall: `http://localhost:${PORT}/api/v1/devis/getalldevis`,
      addcalient: `http://localhost:${PORT}/api/v1/devis/adddevis`,
    }

  });
});

module.exports = router;
