module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      //id가 기본적으로 들어있다.
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: 'utf8', //mb4 이모티콘 저장
      collate: 'utf8_general_ci',
    }
  );
  Image.associate = db => {
    db.Image.belongsTo(db.Post);
  };

  return Image;
};
