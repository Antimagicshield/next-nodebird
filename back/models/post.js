module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      //id가 기본적으로 들어있다.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', //mb4 이모티콘 저장
      collate: 'utf8mb4_general_ci',
    }
  );
  Post.associate = db => {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image); //post.addImages
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); //post.addLikers, post.removeLikers
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
  };

  return Post;
};
