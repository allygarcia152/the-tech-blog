const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

// create our Post model - adding all this in our model method allows us to use it in all the routes in post-routes.js without having to ask for it becuase it's already asked to be included here
class Post extends Model { }

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;