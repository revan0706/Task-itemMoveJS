function moveItem1() {
  let ul2 = document.querySelector("ul#ul2");
  let item1 = document.querySelector("li#item1");
  ul2.append(item1);
}

function moveItem2() {
  let copyli2 = document.querySelector("li#item2").cloneNode(true);
  document.querySelector("ul#ul2").append(copyli2);
}

function darkMode() {
  let input = document.querySelector("input[id= darkMode]");
  let value = document.querySelector("input[id= darkMode]").attributes["value"]
    .value;
  if (value == "Light Mode") {
    document.querySelector("body").setAttribute("class", "lightMode");
    input.setAttribute("value", "Dark Mode");
  } else if (value == "Dark Mode") {
    document.querySelector("body").setAttribute("class", "darkMode");
    input.setAttribute("value", "Light Mode");
  }
}
