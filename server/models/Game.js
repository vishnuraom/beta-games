const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GameSchema = new Schema({
  id: Number,
  name : String,
  cover : String,
  platforms : Array,
  summary : String,
  screenshots : Array,
  popularity: Number,
  slug : String,
})

const Game = mongoose.model("Game", GameSchema)
module.exports = Game
