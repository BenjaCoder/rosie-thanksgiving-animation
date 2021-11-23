window.onload = () => {
  const body = document.querySelector("body");
  const main = document.getElementById("main");
  const grass = document.getElementById("grass");
  grass.style.top = window.innerHeight - grass.clientHeight + "px";

  const mainSplit = "Happy Thanksgiving!".split("");
  for (let i of mainSplit) {
    let span = document.createElement("span");
    span.style.opacity = 0.8;
    let spanText = document.createTextNode(i);
    span.appendChild(spanText);
    main.appendChild(span);
  }

  let i = 0;
  let factor = 0;
  let opac = [0.5, 0.25, 0.5, 0.8];
  setInterval(() => {
    let child = main.children[i % mainSplit.length];
    child.style.opacity = opac[factor];
    i++;
    if (i % mainSplit.length == 0) {
      factor = (factor + 1) % opac.length;
    }
  }, 200);

  function generateLeaf() {
    let newLeaf = document.createElement("img");
    newLeaf.src = Math.random() < 0.5 ? "leaf1.svg" : "leaf2.svg";
    newLeaf.classList.add("leaf-svg");
    newLeaf.style.top = "-220px";
    newLeaf.style.fill = "blue";
    newLeaf.style.left = Math.random() * (window.innerWidth - 120) - 80 + "px";
    body.appendChild(newLeaf);
    if (body.childElementCount > 80) {
      body.removeChild(body.children[5]);
    }
    return newLeaf;
  }

  const timeBetweenNewLeaf = 750;
  setInterval(() => {
    let leaf = generateLeaf();
    floatLeaf(leaf);
  }, timeBetweenNewLeaf);

  function floatLeaf(leaf) {
    let deg = 0;
    let add = Math.random() * 3 + 1;
    let fall = Math.random() * 2 + 1;
    setInterval(() => {
      if (parseFloat(leaf.style.top) < window.innerHeight - 240) {
        leaf.style.top = parseFloat(leaf.style.top) + fall + "px";
        leaf.style.transform = `scale(0.2) rotate(${(deg += add)}deg)`;
      }
    }, 20);
  }
};
