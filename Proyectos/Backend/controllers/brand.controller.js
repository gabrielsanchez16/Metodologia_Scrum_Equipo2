const {Brand} = require('../models/Brand');
const {Op,fn,col,where} = require('sequelize')

const getAllBrands = async () => {
    const brands = await Brand.findAll();
    if (!brands || brands.length === 0) {
        brands = 'No hay Marcas encontradas';
    }
    return brands;
}

const getBrandByName = async (name) => {
    let brands = await Brand.findAll({
        where: where(
          fn('LOWER', col('name')),
          {
            [Op.like]: `%${name.toLowerCase()}%`
          }
        )
      });
  
    if (!brands) {
      brands = 'Marca no encontrada';
    }
  
    return brands;
  };



module.exports = {
    getAllBrands,
    getBrandByName
}