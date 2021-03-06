module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('categories', {
    name: DataTypes.STRING,
    parent_id: DataTypes.INTEGER
  }, {
     underscored: true
  });

  // Model.associate = function(models){
  //     this.Users = this.belongsToMany(models.User, {through: 'UserCategory'});
  // };

  Model.prototype.toWeb = function () {
    let json = this.toJSON();
    return json;
  };

  return Model;
};
