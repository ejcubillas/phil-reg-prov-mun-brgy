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


  sort: (arr, sort = 'A') => {

    // A for asc
    // z for desc

    var sorted = arr.slice(0);

    if (sort == 'A') {

      sorted.sort(function(a,b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });


    }else if (sort == 'Z') {

      sorted.sort(function(a,b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return y < x ? -1 : y > x ? 1 : 0;
      });

    }


    return sorted;
  }

}

module.exports = lib;
