import moongose from 'mongoose';

const chatSchema = new moongose.Schema(
  {
    members: Array
  },
  {
    timestamps: true
  }
);

const chatModel = moongose.model('Chat', chatSchema);

export default chatModel;
