const express = require("express");
const router = express.Router();
const multer  = require('multer');

const { createUser, getUserById, updateUser, deleteUser, getUserByEmail } = require("../controllers/userController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


// create a new user
router.post("/create", createUser)

// get user by id
router.get("/:userId", getUserById)

// get user by email
router.get("/email/:email", getUserByEmail)



// update user
router.put("/:userId/edit", upload.single('image'), updateUser)

// delete user
router.delete("/:userId/delete", deleteUser)

module.exports = router;
