import express from "express";
import axios from "axios";


const router = express.Router();

// @route    GET api/people
// @desc     Get all characters
// @access   Public
router.get("/", async (req, res) => {
  try {
    const uri = encodeURI(`https://swapi.dev/api/people`);
    const headers = {
      "user-agent": "*",
    };

    const swapiResponse = await axios.get(uri, { headers });

    let peopleList = [];

    // Fetch each character
    swapiResponse.data.results.forEach((results) => {
      const { name, gender, height } = results;
      let newPerson = {
        name,
        gender,
        height,
      };
      // Push each newPerson to peopleList array
      peopleList.push(newPerson);
    });

    return res.status(200).json(peopleList);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "No Character found" });
  }
});

// @route    GET api/people?gender=
// @desc     sort by gender
// @access   Public
// router.get("gender", async (req, res) => {
//   try {
//     const uri = encodeURI(`https://swapi.dev/api/people`);
//     const headers = {
//       "user-agent": "*",
//     };

//     const swapiResponse = await axios.get(uri, { headers });



//     let peopleList = [];

//     swapiResponse.data.results.forEach((results) => {
//       const { name, gender, height } = results;
//       let newPerson = {
//         name,
//         gender,
//         height,
//       };

//       if (gender == "male") {
//         peopleList.push(newPerson);
//         console.log("Running");
//       } else {
//         console.log("Not running");
//       }

//     //   peopleList.push(newPerson);
//     });

//     return res.status(200).json(peopleList);
//   } catch (err) {
//     console.error(err.message);
//     return res.status(404).json({ msg: "No Character found" });
//   }
// });




export default router;
