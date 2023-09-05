window.addEventListener("load", () => {
  let colors = 
  [
      "#ffa600",
      "#ff7c43",
      "#f95d6a",
      "#d45087",
      "#a05195",
      "#665191",
      "#2f4b7c",
      "#003f5c"
  ];
  let index = -1;
  function colorCell(id, t) {
    setTimeout(() => {
      const cell = document.getElementById(id);
      if (cell) {
        cell.style.backgroundColor = colors[index];
        cell.innerHTML = "\\"; 
      }
      // console.log({cell, id});
    }, t += t);
  }

  const time = 50;
  
  function drawSunflower(num, scaleFactor) {
    if (scaleFactor > 2 || scaleFactor < 0) return;
    index = index+1 >= colors.length ? 0 : index + 1;
    let t = time;
    let recenter = Math.floor(num/2);
    for (var i = 0; i < num; i++) {
        var theta = 2.39998131 * i;
        var radius = scaleFactor * Math.sqrt(theta);
        var x = (Math.cos(theta) * radius) + recenter;
        var y = (Math.sin(theta) * radius) + recenter;
        colorCell(`${Math.floor(x)}-${Math.floor(y)}`, t+=time);
    }
    setTimeout(() => drawSunflower(num, scaleFactor+=0.1), t+=time);
    setTimeout(() => drawSunflower(num, scaleFactor-=0.1), t+=time);
  }

  function initGrid(num) {
    const table = document.getElementById("table");
    for (let i = 0; i < num; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < num; j++) {
        const td = document.createElement("td");
        td.id = `${i}-${j}`;
        td.innerHTML = "/";
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  }
  
  const w = window.innerWidth - 100;
  const h = window.innerHeight - 200;
  const squares = Math.floor(Math.max(w,h)/20);
  initGrid(squares);
  drawSunflower(squares, 1.2);
});