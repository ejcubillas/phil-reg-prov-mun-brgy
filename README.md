### Description
A Javascript library to get the regions, provinces, cities, municipalities and barangays in the Philippines

------------

### Installation


**Via NPM**

`npm i phil-reg-prov-mun-brgy`

or

****Via `<script>` Tag****
- Download the phil.min.js from the build folder
- Include to HTML file `<script type="text/javascript" src="path_to/phil.min.js">`
------------
### Usage

#### Via NPM
`var phil = require('phil-reg-prov-mun-brgy')`

or

`import phil from 'phil-reg-prov-mun-brgy'`

You can also import properties and methods

  `import { regions, getProvincesByRegion, ... } from 'phil-reg-prov-mun-brgy'`
   ```javascript
var phil = require('phil-reg-prov-mun-brgy');
console.log(phil.regions);
```
or

```javascript
import phil from 'phil-reg-prov-mun-brgy';
console.log(phil.barangays);
```


 #### Via Script Tag
  `<script type="text/javascript" src="path_to/phil.min.js">`

  You can now access the '*Philippines*' object globally
  `window.Philippines` or `Philippines`
 ```javascript
<script type="text/javascript" src="path_to/phil.min.js">
<script type="text/javascript">
      Philippines.getProvincesByRegion('01');
	  console.log(Philippines.provinces);
</script>
```

------------

### Properties and methods
| Property  | Type  |  Description |
| ------------ | ------------ | ------------ |
| regions  | Array  | List of all regions  |
| provinces  | Array  | List of all provinces  |
| city_mun  |  Array | List of all cities and municipalities  |
| barangays  |  Array | List of all barangays  |
| getProvincesByRegion  |  Function | Provinces in the selected region. *Parameter (region_code)* |
| getCityMunByProvince  |  Function |  Cities and Municipalities in the selected Province. *Parameter (province_code)* |
| getBarangayByMun  |  Function |  Barangays in the selected City. *Parameter (mun_code)* |
| sort  |  Function |  Sorts the array. *Parameters (arr, sort = 'A' or 'Z')* |


------------

## Credits
[National Statistical Coordination Board](http://www.nscb.gov.ph/ "National Statistical Coordination Board")
[clavearnel](https://github.com/clavearnel/philippines-region-province-citymun-brgy "clavearnel")
