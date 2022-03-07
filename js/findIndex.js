/*
findIndex() -> return the index of the first element, which match the conditions
*/
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.findIndex(option => option.label === "blue")); // 2
colorPickerOptions.findIndex(option => option.label === "pink"); // 3
colorPickerOptions.findIndex(option => option.label === "white"); // -1