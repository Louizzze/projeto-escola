var establishmentList = [
  {
    name: "Estabelecimento 1",
    image: "https://placedog.net/100/100",
    description: "Descrição do estabelecimento 1",
    latitude: -5.0463563,
    longitude: -42.7675733,
  },
  {
    name: "Estabelecimento 2",
    image: "https://placedog.net/100/100",
    description: "Descrição do estabelecimento 2",
    latitude: -5.0637571,
    longitude: -42.7942461,
  },
  {
    name: "Estabelecimento 3",
    image: "https://placedog.net/100/100",
    description: "Descrição do estabelecimento 3",
    latitude: -5.0690195,
    longitude: -42.7917491,
  },
  {
    name: "Estabelecimento 4",
    image: "https://placedog.net/100/100",
    description: "Descrição do estabelecimento 4",
    latitude: -5.068736,
    longitude: -42.7746955,
  },
  {
    name: "Estabelecimento 5",
    image: "https://placedog.net/100/100",
    description: "Descrição do estabelecimento 5",
    latitude: -5.0653333,
    longitude: -42.7799812,
  },
];

function carregaEstabelecimentos() {
  let containerEstablishment = document.getElementById(
    "containerEstablishment"
  );

  containerEstablishment.innerHTML = "";
  for (let i = 0; i < establishmentList.length; i++) {
    let establishmentHtml = `
        <div class="card-establishment">
            <div class="card-img">
                <img src="${establishmentList[i].image}" alt="" />
            </div>
            <div class="card-content">
                <h3>${establishmentList[i].name}</h3>
                <p>${establishmentList[i].description}</p>
            </div>
            </div>
        `;

    containerEstablishment.innerHTML += establishmentHtml;

    let marker = new google.maps.Marker({
      position: {
        lat: establishmentList[i].latitude,
        lng: establishmentList[i].longitude,
      },
      map,
      title: establishmentList[i].name,
    });

    const infowindow = new google.maps.InfoWindow({
      content: establishmentHtml,
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }
}

window.onload = function () {
  carregaEstabelecimentos();
};
