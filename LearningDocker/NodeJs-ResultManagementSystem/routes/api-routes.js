const router = require("express").Router();
const multer = require("multer");
const moment = require("moment");
const fs = require("fs");

const Student = require("../Models/studentModel");
const Teacher = require("../Models/teacherModel");
const { jwtauth } = require("../lib/jwtlib");

// image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

var upload = multer({
  storage: storage,
}).single("image");

// get all student route
router.get("/dashboard", jwtauth, (req, res) => {
  Student.find()
    .sort({ score: -1 })
    .exec((err, students) => {
      if (err) {
        res.json({ message: err.message });
      } else {
        res.render("index", {
          title: "Dashboard | Result Managment System",
          students: students,
          user: req.user,
        });
      }
    });
});

// add new student route
router.get("/add", jwtauth, (req, res) => {
  res.render("add-student", {
    title: "Add New Student | Result Managment System",
    user: req.user,
  });
});

// insert a student into database
router.post("/add", jwtauth, upload, (req, res) => {
  const { name, roll, score, dob } = req.body;
  const student = new Student({
    name: name,
    rollNo: roll,
    score: score,
    dateOfBirth: dob,
  });

  if (req.file) {
    student.image = req.file.filename;
  }

  student.save((err) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      req.session.message = {
        type: "success",
        message: "Student added successfully!",
      };
      res.redirect("/dashboard");
    }
  });
});

// Search student route
router.post("/search", jwtauth, (req, res) => {
  Student.find()
    .sort({ score: -1 })
    .exec((err, students) => {
      if (err) {
        res.json({ message: err.message, type: "danger" });
      } else {
        let result = [];
        for (let index = 0; index < students.length; index++) {
          let element = students[index];
          if (
            element.name
              .toLowerCase()
              .includes(req.body.searchName.toLowerCase())
          ) {
            result.push(element);
          }
        }

        res.render("index", {
          title: "Search Student | Result Managment System",
          students: result,
          user: req.user,
          message: {
            type: result.length > 0 ? "success" : "danger",
            message: result.length > 0 ? "Student Found!" : "No Student Found",
          },
        });
      }
    });
});

// edit student view (get) route
router.get("/edit/:id", jwtauth, (req, res) => {
  const id = req.params.id;
  Student.findById(id, (err, student) => {
    if (err || student == null) {
      res.redirect("/dashboard");
    } else {
      res.render("edit-student", {
        title: "Edit Student Data | Result Managment System",
        student: student,
        user: req.user,
        moment: moment,
      });
    }
  });
});

// update student post route
router.post("/update/:id", jwtauth, upload, (req, res) => {
  const id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync("./uploads/" + req.body.old_image);
    } catch (error) {
      console.error(error);
    }
  } else {
    new_image = req.body.old_image;
  }

  Student.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      rollNo: parseInt(req.body.roll, 10),
      score: parseInt(req.body.score, 10),
      dateOfBirth: new Date(req.body.dob),
      image: new_image,
    },
    (err, result) => {
      if (err) {
        res.json({ message: err.message, type: "danger" });
      } else {
        req.session.message = {
          type: "success",
          message: "Student updated successfully!",
        };
        res.redirect("/dashboard");
      }
    }
  );
});

// Delete Student Route
router.get("/delete/:id", jwtauth, (req, res) => {
  const id = req.params.id;
  Student.findByIdAndRemove(id, (err, result) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      if (result.image != "") {
        try {
          fs.unlinkSync("./uploads/" + result.image);
        } catch (error) {
          console.error(error);
        }
      }
      req.session.message = {
        type: "info",
        message: "Student deleted successfully!",
      };
      res.redirect("/dashboard");
    }
  });
});

// get student search page
router.get("/student", (req, res) => {
  req.session = null;
  res.render("search", {
    title: "Search | Result Managment System",
    user: req.user,
  });
});

// post student results
router.post("/search/result", async (req, res) => {
  const student = await Student.findOne({
    name: req.body.name,
    rollNo: req.body.roll,
  });
  if (!student) {
    req.session.message = {
      type: "danger",
      message: "No Student Found!",
    };
    res.redirect("/student");
  } else {
    return res.render("result", {
      title: "Search Result | Result Managment System",
      user: req.user,
      student: student,
      message: {
        type: "success",
        message: "Student found successfully!",
      },
    });
  }
});

// homr page for login
router.get("/", (req, res) => {
  res.render("Auth/home");
});

// teacher profile route
router.get("/teacher/profile", jwtauth, (req, res) => {
  const user = req.user;
  res.render("profile", { title: `${user.name} | Profile`, user: user });
});

// update teacher image
router.post("/teacher/update", jwtauth, upload, async (req, res) => {
  const teacher = await Teacher.findOne({ email: req.user.email });
  if (!teacher) {
    req.session.message = {
      type: "danger",
      message: "No Teacher Found!",
    };
    return res.redirect("/dashboard");
  } else {
    if (teacher.profile_pic) {
      try {
        fs.unlinkSync("./uploads/" + teacher.profile_pic);
      } catch (error) {
        console.error(error);
      }
    }
    Teacher.findByIdAndUpdate(
      teacher._id,
      {
        name: teacher.name,
        email: teacher.email,
        profile_pic: req.file.filename,
        password: teacher.password,
      },
      (err, result) => {
        if (err) {
          res.json({ message: err.message, type: "danger" });
        } else {
          req.session.message = {
            type: "success",
            message: "Image updated successfully!",
          };
          res.redirect("/teacher/profile");
        }
      }
    );
  }
});

module.exports = router;
