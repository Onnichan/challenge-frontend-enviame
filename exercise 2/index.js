let values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  2: {
    carrier: "CCH",
    service: "express",
  },
  3: {
    carrier: "CCH",
    service: "priority",
  },
  15: {
    carrier: "CHP",
    service: "nextday",
  },
  16: {
    carrier: "CHP",
    service: "sameday",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};

let json = {
  data: {
    BUIN: [
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15,
      },
    ],
    LAJA: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2,
      },
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    ],

    LEBU: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      {
        limit: 6,
        over_carrier_service_id: 3,
        under_carrier_service_id: 3,
      },
      {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2,
      },
      {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16,
      },
    ],

    LOTA: [
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15,
      },
      {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16,
      },
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    ],
  },
};

function treatment(firstDoc, secondDoc) {
  // const result = {... secondDoc.data};
  const result = _.cloneDeep(secondDoc);
  // console.log(result);
  // for (obj in secondDoc.data) {
  //   const red = secondDoc.data[obj].reduce(
  //     (current, next) => (current.limit > next.limit ? current : next),
  //     {}
  //   );
  //   Object.defineProperties(obj, key)
  //   red['over'] = red['over_carrier_service_id'];
  //   red['under'] = red['under_carrier_service_id'];
  //   secondDoc.data[obj] = red;
  //   for(key in values){
  //     if(key == red['carrier']){
  //       red['carrier'] = values[key];
  //       red['service'] = values[key];
  //     }
  //   }
  // }
  // console.log(secondDoc.data);
  console.log(result);
  return {};
}
treatment(values, json);
