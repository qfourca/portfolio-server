const Sequelize = require("sequelize");

class Techstack extends Sequelize.Model {
  static initiate(sequelize) {
    Techstack.init(
      {
        uuid: {
          type: Sequelize.STRING(36),
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        progress: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        type: {
          type: Sequelize.ENUM(
            "language",
            "framework",
            "library",
            "tool",
            "etc"
          ),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        createdAt: false,
        modelName: "Techstack",
        tableName: "techstacks",
      }
    );
  }

  static associate(db) {
    db.Techstack.belongsToMany(db.Project, {
      through: "TechstackNProject",
    });
  }
}

module.exports = Techstack;
