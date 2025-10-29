const { Type } = require('./Type.js');
const { Brand } = require('./Brand.js');
const { Mechanic } = require('./Mechanic.js');
const { Workshop } = require('./Workshop.js');
const { WorkOrder } = require('./WorkOrder.js');
const { Service } = require('./Service.js');
const { ServiceByWorkshop } = require('./ServiceByWorkshop.js');
const { Motorcycle } = require('./Motorcycle.js');
const { Photo } = require('./Photo.js');
const { Owner } = require('./Owner.js');
const { TypeWorkshop } = require('./TypeWorkshop.js');
const { Suscription } = require('./Suscription.js');
const { Worker } = require('./Worker.js');
const { Role } = require('./Role.js');

const initModels = () => {
  // motorcycle -> brand
  Motorcycle.belongsTo(Brand, { foreignKey: 'id_brand' });
  Brand.hasMany(Motorcycle, { foreignKey: 'id_brand' });

  //types-> Workshop
  Workshop.belongsTo(TypeWorkshop, { foreignKey: 'id_type_workshop' });
  TypeWorkshop.hasMany(Workshop, { foreignKey: 'id_type_workshop' });

  Workshop.belongsTo(Suscription, {
    foreignKey: 'id_suscription',
    as: 'suscriptionRelation'   // nuevo alias
  });
  Suscription.hasMany(Workshop, {
    foreignKey: 'id_suscription',
    as: 'workshops'
  });


  //workers -> workshop
  Worker.belongsTo(Workshop, { foreignKey: 'id_workshop' });
  Workshop.hasMany(Worker, { foreignKey: 'id_workshop' });

  //worker -> suscription
  // worker -> suscription
Worker.belongsTo(Suscription, { 
  foreignKey: 'id_suscription', 
  as: 'suscriptionRelation'   // alias único
});
Suscription.hasMany(Worker, { 
  foreignKey: 'id_suscription', 
  as: 'workers' 
});


  //worker -> role
  Worker.belongsTo(Role, { foreignKey: 'id_role' });
  Role.hasMany(Worker, { foreignKey: 'id_role' });

  // motorcycle -> workshop
  Motorcycle.belongsTo(Workshop, { foreignKey: 'id_workshop' });
  Workshop.hasMany(Motorcycle, { foreignKey: 'id_workshop' });

  // motorcycle -> owner
  Motorcycle.belongsTo(Owner, { foreignKey: 'id_owner' });
  Owner.hasMany(Motorcycle, { foreignKey: 'id_owner' });

  // work_order -> motorcycle
  WorkOrder.belongsTo(Motorcycle, { foreignKey: 'id_motorcycle' });
  Motorcycle.hasMany(WorkOrder, { foreignKey: 'id_motorcycle' });

  // work_order -> mechanic
  WorkOrder.belongsTo(Mechanic, { foreignKey: 'id_mechanic' });
  Mechanic.hasMany(WorkOrder, { foreignKey: 'id_mechanic' });

  // photo -> work_order
  Photo.belongsTo(WorkOrder, { foreignKey: 'id_order' });
  WorkOrder.hasMany(Photo, { foreignKey: 'id_order' });

  // service_by_work -> work_order
  ServiceByWorkshop.belongsTo(WorkOrder, { foreignKey: 'id_order' });
  WorkOrder.hasMany(ServiceByWorkshop, {
    foreignKey: 'id_order',
  });

  // service_by_work -> service
  ServiceByWorkshop.belongsTo(Service, {
    foreignKey: 'id_service',
  });
  Service.hasMany(ServiceByWorkshop, {
    foreignKey: 'id_service'
  });

  // service -> type
  Service.belongsTo(Type, { foreignKey: 'id_type' });
  Type.hasMany(Service, { foreignKey: 'id_type' });

  // service -> workshop
  Service.belongsTo(Workshop, { foreignKey: 'id_workshop' });
  Workshop.hasMany(Service, { foreignKey: 'id_workshop' });

  // mechanic -> workshop
  Mechanic.belongsTo(Workshop, { foreignKey: 'id_workshop' });
  Workshop.hasMany(Mechanic, { foreignKey: 'id_workshop' });

  // owner -> workshop
  Owner.belongsTo(Workshop, { foreignKey: 'id_workshop' });
  Workshop.hasMany(Owner, { foreignKey: 'id_workshop' });


};

module.exports = initModels;
