const filters = {
  brightness:{ value:100, min:0, max:200, unit:"%" },
  contrast:{ value:100, min:0, max:200, unit:"%" },
  saturation:{ value:100, min:0, max:200, unit:"%" },
  blur:{ value:0, min:0, max:20, unit:"px" },
  grayscale:{ value:0, min:0, max:100, unit:"%" },
  sepia:{ value:0, min:0, max:100, unit:"%" }
};

const canvas = document.querySelector("#image-canvas");
const ctx = canvas.getContext("2d");
const imgInput = document.querySelector("#image-input");
const filtersContainer = document.querySelector(".filters");
const placeholder = document.querySelector(".placeholder");
const resetBtn = document.querySelector("#reset-btn");
const downloadBtn = document.querySelector("#download-btn");

let image = null;

/* ---------- Create Filters ---------- */
function createFilter(name, config){
  const div = document.createElement("div");
  div.className = "filter";

  const p = document.createElement("p");
  p.innerText = name;

  const input = document.createElement("input");
  input.type = "range";
  input.min = config.min;
  input.max = config.max;
  input.value = config.value;

  input.oninput = () => {
    filters[name].value = input.value;
    applyFilters();
  };

  div.append(p,input);
  return div;
}

Object.keys(filters).forEach(key=>{
  filtersContainer.appendChild(createFilter(key,filters[key]));
});

/* ---------- Image Load ---------- */
imgInput.addEventListener("change",e=>{
  const file = e.target.files[0];
  if(!file) return;

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = ()=>{
    image = img;
    canvas.width = img.width;
    canvas.height = img.height;
    placeholder.style.display="none";
    canvas.style.display="block";
    applyFilters();
  };
});

/* ---------- Apply Filters ---------- */
function applyFilters(){
  if(!image) return;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.filter = `
    brightness(${filters.brightness.value}%)
    contrast(${filters.contrast.value}%)
    saturate(${filters.saturation.value}%)
    blur(${filters.blur.value}px)
    grayscale(${filters.grayscale.value}%)
    sepia(${filters.sepia.value}%)
  `;

  ctx.drawImage(image,0,0);
}

/* ---------- Reset ---------- */
resetBtn.onclick = ()=>{
  Object.keys(filters).forEach(f=>{
    filters[f].value = f==="blur"?0:100;
  });

  document.querySelectorAll(".filter input").forEach(input=>{
    const name = input.previousSibling.innerText;
    input.value = filters[name].value;
  });

  applyFilters();
};

/* ---------- Download ---------- */
downloadBtn.onclick = ()=>{
  if(!image) return;
  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = canvas.toDataURL();
  link.click();
};

/* ---------- Presets ---------- */
const presets = {
  oldschool:{ brightness:90, contrast:120, saturation:80, blur:0, grayscale:10, sepia:30 },
  vintage:{ brightness:95, contrast:110, saturation:70, blur:0, grayscale:0, sepia:40 },
  cinematic:{ brightness:85, contrast:130, saturation:110, blur:0, grayscale:0, sepia:10 },
  bright:{ brightness:120, contrast:110, saturation:140, blur:0, grayscale:0, sepia:0 },
  bw:{ brightness:100, contrast:120, saturation:0, blur:0, grayscale:100, sepia:0 }
};

document.querySelectorAll(".preset-btn").forEach(btn=>{
  btn.onclick = ()=>{
    if(!image) return;

    const preset = presets[btn.dataset.preset];

    Object.keys(filters).forEach(key=>{
      filters[key].value = preset[key];
    });

    document.querySelectorAll(".filter input").forEach(input=>{
      const name = input.previousSibling.innerText;
      input.value = filters[name].value;
    });

    applyFilters();
  };
});
