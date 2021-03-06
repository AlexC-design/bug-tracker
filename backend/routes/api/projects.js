const express = require("express");
const router = express.Router();

const Project = require("../../models/Project");
const User = require("../../models/User");
const Tasks = require("../../models/Task");
const Task = Tasks.TaskModel;

// ---------- PROJECT ------------

//descr   Get all projects
router.get("/", (req, res) => {
  Project.find()
    .sort({ creationDate: -1 })
    .then(projects => res.json(projects));
});

//descr   Get a project by ID
router.get("/:id", (req, res) => {
  Project.findById(req.params.id).then(project => {
    res.json(project);
  });
});

//descr   Get a user's projects
router.get("/user/:userId", (req, res) => {
  User.findById(req.params.userId).then(user => {
    Project.find({
      _id: { $in: user.projects }
    })
      .sort({ creationDate: -1 })
      .then(projects => res.json(projects));
  });
});

//descr   Create new project
router.post("/", (req, res) => {
  const newProject = new Project({
    projectName: req.body.projectName,
    projectMembers: [{ userId: req.body.userId.toString(), isAdmin: true }]
  });

  newProject.save().then(project => {
    User.findById(req.body.userId).then(user => {
      user.projects.push(project._id.toString());
      user.save();
    });
    return res.json(project);
  });
});

//descr   Delete a project
router.delete("/:id", (req, res) => {
  Project.findById(req.params.id).then(project => {
    let userIds = project.projectMembers.map(member => member.userId);

    User.find(
      {
        _id: { $in: userIds }
      },
      (err, users) => {
        users.forEach(user => {
          user.projects = user.projects.filter(
            projectId => projectId !== req.params.id.toString()
          );
          user.save();
        });
      }
    );

    project.remove().then(project => res.json(project._id));
  });
});

// ---------- TASKS ------------

//descr   Add task in project
router.put("/:projectId", (req, res) => {
  const newTask = new Task({
    ...req.body
  });

  Project.findById(req.params.projectId).then(project => {
    project.tasks[`Unassigned`].push(newTask);
    project.save().then(project => {
      return res.json(project.tasks);
    });
  });
});

//descr   Delete task from project
router.delete("/:projectId/:taskPriority/:taskId", (req, res) => {
  Project.findById(req.params.projectId).then(project => {
    let taskIndex = project.tasks[`${req.params.taskPriority}`].findIndex(
      task => {
        return task._id.toString() === req.params.taskId;
      }
    );
    if (taskIndex !== -1) {
      project.tasks[`${req.params.taskPriority}`].splice(taskIndex, 1);
    } else {
      return "not found";
    }
    project.save().then(project => {
      return res.json(project.tasks);
    });
  });
});

//descr   Edit task completion
router.put("/completion/:projectId/:taskPriority/:taskId", (req, res) => {
  Project.findById(req.params.projectId).then(project => {
    let taskIndex = project.tasks[`${req.params.taskPriority}`].findIndex(
      task => {
        return task._id.toString() === req.params.taskId;
      }
    );
    if (taskIndex !== -1) {
      project.tasks[`${req.params.taskPriority}`][
        taskIndex
      ].taskCompleted = !project.tasks[`${req.params.taskPriority}`][taskIndex]
        .taskCompleted;
    } else {
      return "not found";
    }
    project.save().then(project => {
      return res.json(project.tasks);
    });
  });
});

//descr   Edit Task Details
router.put("/edit/:projectId/:taskPriority/:taskId", (req, res) => {
  Project.findById(req.params.projectId).then(project => {
    let taskIndex = project.tasks[`${req.params.taskPriority}`].findIndex(
      task => {
        return task._id.toString() === req.params.taskId;
      }
    );
    if (taskIndex !== -1) {
      let currentTask = project.tasks[`${req.params.taskPriority}`][taskIndex];

      currentTask.taskName = req.body.taskName;
      currentTask.taskSeverity = req.body.taskSeverity;
      currentTask.taskSummary = req.body.taskSummary;
      currentTask.taskDescription = req.body.taskDescription;
      currentTask.taskEnvironment = req.body.taskEnvironment;
    } else {
      return "not found";
    }

    project.save().then(project => {
      return res.json(project.tasks);
    });
  });
});

//descr   Edit Task Column
router.put("/change-column/:projectId/:taskId", (req, res) => {
  Project.findById(req.params.projectId).then(project => {
    let taskIndex = project.tasks[`${req.body.oldPriority}`].findIndex(task => {
      return task._id.toString() === req.params.taskId;
    });
    if (taskIndex !== -1) {
      let taskToMove = project.tasks[`${req.body.oldPriority}`][taskIndex];
      project.tasks[`${req.body.oldPriority}`].splice(taskIndex, 1);

      taskToMove.taskPriority = req.body.newPriority;

      project.tasks[`${req.body.newPriority}`].push(taskToMove);
    } else {
      return "not found";
    }

    project.save().then(project => {
      return res.json(project.tasks);
    });
  });
});

// ---------- USERS ------------

//descr   add user to project
router.post("/add-user", (req, res) => {
  User.findOne({ email: req.body.userEmail }, (err, user) => {
    if (user) {
      user.projects.push(req.body.projectId.toString());
      user.save().then(user => {
        Project.findById(req.body.projectId).then(project => {
          project.projectMembers.push({
            userId: user._id.toString(),
            isAdmin: false
          });

          project.save().then(project => res.json(project.projectMembers));
        });
      });
    } else {
      return res.json({ error: "email not found" });
    }
  });
});

//descr   remove user from project
router.post("/remove-user", (req, res) => {
  User.findById(req.body.userId).then(user => {
    user.projects = user.projects.filter(
      projectId => projectId !== req.body.projectId
    );
    user.save();
  });
  Project.findById(req.body.projectId).then(project => {
    project.projectMembers = project.projectMembers.filter(
      member => member.userId !== req.body.userId
    );
    project.save().then(project => res.json(project.projectMembers));
  });
});

module.exports = router;
