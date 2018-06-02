module.exports = (sequelize, DataTypes) => {
  const Catch = sequelize.define('Catch', {
    spot: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    finishingType: DataTypes.STRING,
    lure: DataTypes.STRING,
    fishType: DataTypes.STRING,
    length: DataTypes.INTEGER,
    Weight: DataTypes.INTEGER,
  });
  return Catch;
};
