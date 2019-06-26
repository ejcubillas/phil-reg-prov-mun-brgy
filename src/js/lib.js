const regions = require('../json/regions.json');
const provinces = require('../json/provinces.json');
const city_mun = require('../json/city-mun.json');
const brgy = require('../json/barangays.json');


let lib = {
  regions: regions,
  provinces: provinces,
  city_mun: city_mun,
  barangays: brgy,

  // get all provinces in selected region
  getProvincesByRegion: (region_code) => {
    return provinces.filter((val, i) => {
      return val.reg_code == region_code;
    })

  },


  // get all cities and municipalities in selected province
  getCityMunByProvince: (province_code) => {
    return city_mun.filter((val, i) => {
      return val.prov_code == province_code
    })

  },


  // get all barangays in selected city or municipality
  getBarangayByMun: (mun_code) => {
    return brgy.filter((val, i) => {
      return val.mun_code == mun_code
    })

  },

}

module.exports = lib;
