const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const noteSchema = new Schema({
  text: {type: String, required: true},
  user: {type: ObjectId, required: true}
}, {
  // Use the timestamps: true option so that the createdAt property can be used to display the date & time of each note.
  timestamps: true,
  // toJSON: {
  //   transform: function(doc, ret) {
  //     delete ret.password;
  //     return ret;
  //   }
  // }
});

// noteSchema.pre('save', async function(next) {
//   // 'this' is the user document
//   if (!this.isModified('password')) return next();
//   // Replace the password with the computed hash
//   this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
// });

module.exports = mongoose.model('Note', noteSchema);