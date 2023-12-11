const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')



router.post("/handle-form-actions", courseController.handleFormAction)
router.post("/stote", courseController.stote)
router.put("/:id", courseController.update)
router.patch("/:id/restore", courseController.restore)
router.delete("/:id", courseController.deletes)
router.delete("/:id/force", courseController.forceDeletes)
router.get("/create", courseController.create)
router.get("/:slug", courseController.show)
router.get("/:id/edit", courseController.edit)


module.exports = router