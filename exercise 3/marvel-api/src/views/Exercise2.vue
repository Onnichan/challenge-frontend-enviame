<script setup>
import { json, values } from "../util/data";
import { ref } from "vue";
let resJSON = ref(null);
// let values = ref(values);
// let codeJSON = ref(null);

//Function that convert to join both json
function treatment(firstDoc, secondDoc) {
    const result = _.cloneDeep(secondDoc);
    const _values = _.cloneDeep(firstDoc);

    console.log(result.data);
    console.log("result", result, values);
    for (let key in result.data) {
        const red = result.data[key].reduce(
            (current, next) => (current.limit > next.limit ? current : next),
            {}
        );
        red["over"] = red["over_carrier_service_id"];
        red["under"] = red["under_carrier_service_id"];
        result.data[key] = red;
        delete result.data[key]["over_carrier_service_id"];
        delete result.data[key]["under_carrier_service_id"];
        for (let key in _values) {
            if (key == red["over"]) {
                red["over"] = _values[key];
                red["under"] = _values[key];
            }
        }
    }
    return result.data;
}

// console.log(treatment(values, json));

function show() {
    resJSON.value = JSON.stringify(treatment(values, json), null, 2);
}

function syntaxHighlight(json) {
    // if (typeof json != "string") {
    //     json = JSON.stringify(json, undefined, 2);
    // }
    // json = json.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
    // return json.replace(
    //     /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    //     function (match) {
    //         var cls = "number";
    //         if (/^"/.test(match)) {
    //             if (/:$/.test(match)) {
    //                 cls = "key";
    //             } else {
    //                 cls = "string";
    //             }
    //         } else if (/true|false/.test(match)) {
    //             cls = "boolean";
    //         } else if (/null/.test(match)) {
    //             cls = "null";
    //         }
    //         return '<span class="' + cls + '">' + match + "</span>";
    //     }
    // );
}
</script>
<template>
    <div class="container">
        <button class="btn" id="btn" @click="show">Show Result</button>
        <div class="grid">
            <div class="grid__item">
                <h3 class="grid__item-title">JSON values</h3>
                <pre id="values">{{ JSON.stringify(values, null, 2) }}</pre>
            </div>
            <div class="grid__item">
                <h3 class="grid__item-title">JSON</h3>
                <pre id="json">{{ JSON.stringify(json, null, 2) }}</pre>
            </div>
            <div class="gri__item">
                <h3 class="grid__item-title">Result</h3>
                <pre id="code">{{ resJSON }}</pre>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    padding: 80px var(--px-container);
}

pre {
    outline: 1px solid #ccc;
    padding: 15px;
    margin: 5px;
    background-color: rgba(241, 99, 123, 0.16);
}
.string {
    color: green;
}
.number {
    color: darkorange;
}
.boolean {
    color: blue;
}
.null {
    color: magenta;
}
.key {
    color: red;
}

.btn {
    display: block;
    background-color: antiquewhite;
    padding: 10px;
    border-radius: 4px;
    width: 200px;
    margin: 40px auto;
}

.btn:hover {
    cursor: pointer;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    gap: 40px;
}

.grid__item-title {
    text-align: center;
    font-weight: 700;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
