const express = require("express");
const router = express.Router();
const userSchema = require("../models/users");
// array de palabras 📃 0-99
const seeds = [
  "the",
  "of",
  "and",
  "a",
  "to",
  "in",
  "is",
  "you",
  "that",
  "it",
  "he",
  "was",
  "for",
  "on",
  "are",
  "as",
  "with",
  "his",
  "they",
  "house",
  "at",
  "be",
  "this",
  "have",
  "from",
  "or",
  "one",
  "had",
  "by",
  "word",
  "but",
  "not",
  "what",
  "all",
  "were",
  "we",
  "when",
  "your",
  "can",
  "said",
  "there",
  "use",
  "an",
  "each",
  "which",
  "she",
  "do",
  "how",
  "their",
  "if",
  "will",
  "up",
  "other",
  "about",
  "out",
  "many",
  "then",
  "them",
  "these",
  "so",
  "some",
  "her",
  "would",
  "make",
  "like",
  "him",
  "into",
  "time",
  "has",
  "look",
  "two",
  "more",
  "write",
  "go",
  "see",
  "number",
  "no",
  "way",
  "could",
  "people",
  "my",
  "than",
  "first",
  "water",
  "been",
  "call",
  "who",
  "oil",
  "its",
  "now",
  "find",
  "long",
  "down",
  "day",
  "did",
  "get",
  "come",
  "made",
  "may",
  "part",
];

// Generate random numbers 🔢
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Generate objet with random words

function GenerateSeedPhrase() {
  return {
    seed0: seeds[getRandomInt(99)],
    seed1: seeds[getRandomInt(99)],
    seed2: seeds[getRandomInt(99)],
    seed3: seeds[getRandomInt(99)],
    seed4: seeds[getRandomInt(99)],
    seed5: seeds[getRandomInt(99)],
    seed6: seeds[getRandomInt(99)],
    seed7: seeds[getRandomInt(99)],
    seed8: seeds[getRandomInt(99)],
    seed9: seeds[getRandomInt(99)],
    seed10: seeds[getRandomInt(99)],
    seed11: seeds[getRandomInt(99)],
  };
}

//Creater User 🗽
router.post("/users", (req, res) => {
  const seedPhrase = GenerateSeedPhrase();
  const seedArray =
    seedPhrase.seed0 +
    "-" +
    seedPhrase.seed1 +
    "-" +
    seedPhrase.seed2 +
    "-" +
    seedPhrase.seed3 +
    "-" +
    seedPhrase.seed4 +
    "-" +
    seedPhrase.seed5 +
    "-" +
    seedPhrase.seed6 +
    "-" +
    seedPhrase.seed7 +
    "-" +
    seedPhrase.seed8 +
    "-" +
    seedPhrase.seed9 +
    "-" +
    seedPhrase.seed10 +
    "-" +
    seedPhrase.seed11;

  const user = userSchema({seed: seedArray});
  user
    .save()
    .then(() => res.json({data: seedPhrase,arrayData:seedArray}))
    .catch(error => res.json({ message: error }))
    
 
});


//Set name to account 🐊
router.put("/users/:seed", (req, res) => {
  const seed = req.params.seed;
  const name = req.body.name
  userSchema
    .updateOne({ seed: seed }, { $set: { name: name }  })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

//login 🫥
router.get("/users", (req,res)=>{
  const seed = req.body.seed
  userSchema
  .find({seed : seed})
  .then(data=> res.json(data))
  .catch(error=> res.json(error))
})

module.exports = router;
