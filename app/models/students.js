module.exports = (sequelize, DataType) => {
    const Students = sequelize.define("Students", {
      id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: DataType.BIGINT
        },
      studentName: {
          type:DataType.STRING,
          allowNull:true
      },
      class: {
          type: DataType.STRING,
          allowNull:true
      },
      rollNumber:{
          type:DataType.BIGINT,
          allowNull: true
      },
      mobileNo:{
          type:DataType.BIGINT,
          allowNull: true
      },
      password:{
          type:DataType.STRING,
          allowNull: true
      },
      createdAt: {
          type:DataType.INTEGER,
          allowNull:true
      },
      updatedAt: {
          type:DataType.INTEGER,
          allowNull:true
      }
      
    }
    , {
      hooks: {
        beforeCreate: (record, options) => {
          record.dataValues.createdAt = Math.floor(Date.now());
          record.dataValues.updatedAt = Math.floor(Date.now());
        },
        beforeUpdate: (record, options) => {
          record.dataValues.updatedAt = Math.floor(Date.now());
        }
      }
      }
    )
    Students.associate = function(models) {
    };
    return Students;
  };
  