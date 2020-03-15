import * as mongoose from 'mongoose';
import uuid from 'uuid';
import { Schema } from 'mongoose';
const bcrypt = require('bcryptjs');
import { IAccessToken } from './../accesstoken.interface';
import mongoosePaginate from 'mongoose-paginate';

const AccessTokenSchema = new Schema({
  ID: {
    type: String,
    default: uuid.v1
  },
  accesstoken: {
    type: String,
  },
  userID: {
    type: String,
  },
  isLogout: {
    type: Boolean,
    default: false
  },
  expirationDate: {
    type: Date,
    default: Date.now
  },
}, {
  timestamps: true,
});

AccessTokenSchema.plugin(mongoosePaginate);
const AccessTokenModel = mongoose.model<IAccessToken>('Accesstoken', AccessTokenSchema);
export default AccessTokenModel;