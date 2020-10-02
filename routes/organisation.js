var express = require("express");
var router = express.Router();
const uuid = require("uuid");
const organisations = [
  {
    id: 1,
    name: "TCS",
  },
  {
    id: 2,
    name: "Amazon",
  },
];

// getting all the organisations
router.get("/", (req, res, next) => res.json(organisations));

// getting single one organisation
router.get("/:id", (req, res, next) => {
  // res.status(404).json({ msg: "not found" });

  res.json(organisations.filter((e) => e.id === Number(req.params.id)));
});

//adding an organisation

router.post("/", (req, res) => {
  if (organisations.some((e) => e.id == req.body.id))
    return res.status(400).send("Organisation already exists");
  const newOrganisation = {
    // id:uuid.v4(),
    id: req.body.id,
    name: req.body.name,
  };
  organisations.push(newOrganisation);
  res.status(201).send();
});
module.exports = router;
