module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      //id가 기본적으로 들어있다.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      //UserId: 1
      //PostId: 3
    },
    {
      charset: 'utf8mb4', //mb4 이모티콘 저장
      collate: 'utf8mb4_general_ci',
    }
  );
  Comment.associate = db => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };

  return Comment;
};
