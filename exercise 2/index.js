const btn = document.getElementById("btn");
const code = document.getElementById("code");
const preValues = document.getElementById('values');
const preJson = document.getElementById('json');

window.addEventListener('DOMContentLoaded', () => {
  
  preValues.innerHTML =  syntaxHighlight(JSON.stringify(values, null, 2));
  preJson.innerHTML =  syntaxHighlight(JSON.stringify(json, null,2));
})
//Function that convert to join both json
function treatment(firstDoc, secondDoc) {
  const result = _.cloneDeep(secondDoc);
  const _values = _.cloneDeep(firstDoc);

  for (key in result.data) {
    const red = result.data[key].reduce(
      (current, next) => (current.limit > next.limit ? current : next),
      {}
    );
    red["over"] = red["over_carrier_service_id"];
    red["under"] = red["under_carrier_service_id"];
    result.data[key] = red;
    delete result.data[key]["over_carrier_service_id"];
    delete result.data[key]["under_carrier_service_id"];
    for (key in _values) {
      if (key == red["over"]) {
        red["over"] = _values[key];
        red["under"] = _values[key];
      }
    }
  }
  return result.data;
}

console.log(treatment(values, json));

btn.addEventListener("click", () => {
  // code.innerHTML = JSON.stringify(treatment(values, json), null, 2);
  code.innerHTML = syntaxHighlight(JSON.stringify(treatment(values, json), null, 2));
});

function syntaxHighlight(json) {
  if (typeof json != "string") {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}
