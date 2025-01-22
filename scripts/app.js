const cargoList = [
  {
    id: "CARGO001",
    name: "Строительные материалы",
    status: "В пути",
    origin: "Москва",
    destination: "Казань",
    departureDate: "2024-11-24",
  },
  {
    id: "CARGO002",
    name: "Хрупкий груз",
    status: "Ожидает отправки",
    origin: "Санкт-Петербург",
    destination: "Екатеринбург",
    departureDate: "2024-11-26",
  },
];

const fillCargoTable = (cargoList) => {
  $("#table-body").empty();

  for (let i = 0; i < cargoList.length; i++) {
    const cargo = cargoList[i];

    $("#table-body").append(`
    <tr class="${getColorByStatus(cargo.status)}">
      <td>${cargo.id}</td>
      <td>${cargo.name}</td>
      <td>${cargo.status}</td>
      <td>${cargo.origin}</td>
      <td>${cargo.destination}</td>
      <td>${cargo.departureDate}</td>
    </tr>
  `);
  }
};

const getColorByStatus = (status) => {
  if (status === "Ожидает отправки") {
    return "table-warning";
  } else if (status === "В пути") {
    return "table-primary";
  } else if (status === "Доставлен") {
    return "table-success";
  } else {
    return "table-danger";
  }
};

$("#create-cargo-btn").click(() => {
  $("#cargo-modal").modal("show");
});

$("#cargo-form").submit((e) => {
  e.preventDefault();

  const name = $("#cargo-name").val();
  const origin = $("#cargo-origin").val();
  const destination = $("#cargo-destination").val();
  const departureDate = $("#cargo-departure-date").val();

  cargoList.push({
    id: `CARGO${cargoList.length + 1}`,
    name,
    status: "Ожидает отправки",
    origin,
    destination,
    departureDate,
  });

  fillCargoTable(cargoList);

  $("#cargo-modal").modal("hide");

  $("#cargo-name").val("");
  $("#cargo-origin").val("");
  $("#cargo-destination").val("");
  $("#cargo-departure-date").val("");
});

fillCargoTable(cargoList);
