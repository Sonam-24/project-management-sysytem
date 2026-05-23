const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post("/", protect, authorizeRoles("admin"), createProject);
router.get("/", protect, getProjects);
router.put("/:id", protect, authorizeRoles("admin"), updateProject);
router.delete("/:id", protect, authorizeRoles("admin"), deleteProject);

module.exports = router;