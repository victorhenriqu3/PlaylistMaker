window.onload = function () {
  update();
};

let PlaylistData = [
  {
    name: "O Teatro Mágico - Cinza",
    link: "https://www.youtube.com/watch?v=zXZCmrNpGzA",
  },
  {
    name: "Scalene - Surreal (CLIPE) | Real / Surreal",
    link: "https://www.youtube.com/watch?v=0p3EDZso9aY",
  },
];

function update() {
  let tableBody = PlaylistData.map(function ({ name, link }) {
    let Thumb = link.substring(link.indexOf("=") + 1);

    return `
            <tr class='PlaylistRow'>
                <td class="center">${name}</td>
                <td class="center">
                <a target="_blank" href='${link}'>
                <iframe class="LinkVideo" src="https://www.youtube.com/embed/${Thumb}">
                </a>
                </iframe>
                </td>
            </tr>`;
  });
  console.log(tableBody);
  document.querySelector(".PlaylistData").innerHTML = tableBody.join("");
}

function SubmitInput() {
  const nameMusic = document.querySelector(".Name").value;
  const linkMusic = document.querySelector(".Link").value;

  if (nameMusic == "" || linkMusic == "") {
    alert("O Campo não pode ser Nulo ou Vazio. Tente novamente!");
  } else {
    PlaylistData = [...PlaylistData, { name: nameMusic, link: linkMusic }];
    document.querySelector(".Name").value = "";
    document.querySelector(".Link").value = "";
  }

  update();
}
