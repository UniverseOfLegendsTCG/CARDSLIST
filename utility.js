export function getData(data) {
  let imageString = "";

  let filteredList = data.slice();

  data.forEach((value) => {
    imageString += `<div class='image-formating'><img src="${value.image}" /></div>`;
  });
  document.querySelector(".first").innerHTML = imageString;

  document.querySelector(".filter-button").addEventListener("click", () => {
    document.querySelector(".name-filter").value &&
      filtered(document.querySelector(".name-filter").value);
    document.querySelector(".color-filter").value &&
      filterColor(document.querySelector(".color-filter").value);
    document.querySelector(".cost-filter").value &&
      filterCost(document.querySelector(".cost-filter").value);
    document.querySelector(".power-filter").value &&
      filterPower(document.querySelector(".power-filter").value);
    document.querySelector(".type-filter").value &&
      filterType(document.querySelector(".type-filter").value);
    document.querySelector(".subtype-filter").value &&
      filterSubtype(document.querySelector(".subtype-filter").value);
    document.querySelector(".effect-filter").value &&
      filterEffect(document.querySelector(".effect-filter").value);

    let displayWord = "";
    filteredList.forEach((value) => {
      displayWord += `<div class='image-formating'><img src="${value.image}" /></div>`;
    });
    document.querySelector(".first").innerHTML = displayWord;

    document.querySelector(".name-filter").value = "";
    document.querySelector(".color-filter").value = "";
    document.querySelector(".cost-filter").value = "";
    document.querySelector(".power-filter").value = "";
    document.querySelector(".type-filter").value = "";
    document.querySelector(".subtype-filter").value = "";
    document.querySelector(".effect-filter").value = "";

    filteredList = data;
  });

  enterListener(".name-filter", filteredList, data);
  enterListener(".color-filter", filteredList, data);
  enterListener(".cost-filter", filteredList), data;
  enterListener(".power-filter", filteredList, data);
  enterListener(".type-filter", filteredList, data);
  enterListener(".subtype-filter", filteredList, data);
  enterListener(".effect-filter", filteredList, data);

  function filtered(word) {
    filteredList = filteredList.filter((value) => {
      return value.name.toLocaleUpperCase().includes(word.toLocaleUpperCase());
    });
  }

  function filterColor(color) {
    filteredList = filteredList.filter((value) => {
      return value.color
        .toLocaleUpperCase()
        .includes(color.toLocaleUpperCase());
    });
  }

  function filterCost(cost) {
    filteredList = filteredList.filter((value) => {
      return value.cost === Number(cost);
    });
  }

  function filterPower(power) {
    filteredList = filteredList.filter((value) => {
      return value.power === Number(power);
    });
  }

  function filterType(type) {
    filteredList = filteredList.filter((value) => {
      return value.type.toLocaleUpperCase() === type.toLocaleUpperCase();
    });
  }

  function filterSubtype(subtype) {
    filteredList = filteredList.filter((value) => {
      if (value.subtype === undefined) {
        return false;
      }
      return value.subtype
        .toLocaleUpperCase()
        .includes(subtype.toLocaleUpperCase());
    });
  }

  function filterEffect(effect) {
    filteredList = filteredList.filter((value) => {
      if (value.effect === undefined) {
        return false;
      }
      return value.effect
        .toLocaleUpperCase()
        .includes(effect.toLocaleUpperCase());
    });
  }
}

export function getDataRarity(data) {
  let filteredList = data.slice();
  let imageString = "";

  data.forEach((value) => {
    imageString += `<div class='image-formating'><img src="${value.image}" /></div>`;
  });
  document.querySelector(".first").innerHTML = imageString;

  document.querySelector(".filter-button").addEventListener("click", () => {
    document.querySelector(".name-filter").value &&
      filtered(document.querySelector(".name-filter").value);
    document.querySelector(".color-filter").value &&
      filterColor(document.querySelector(".color-filter").value);
    document.querySelector(".cost-filter").value &&
      filterCost(document.querySelector(".cost-filter").value);
    document.querySelector(".power-filter").value &&
      filterPower(document.querySelector(".power-filter").value);
    document.querySelector(".type-filter").value &&
      filterType(document.querySelector(".type-filter").value);
    document.querySelector(".subtype-filter").value &&
      filterSubtype(document.querySelector(".subtype-filter").value);
    document.querySelector(".effect-filter").value &&
      filterEffect(document.querySelector(".effect-filter").value);
    document.querySelector(".rarity-filter").value &&
      filterRarity(document.querySelector(".rarity-filter").value);

    let displayWord = "";
    filteredList.forEach((value) => {
      displayWord += `<div class='image-formating'><img src="${value.image}" /></div>`;
    });
    document.querySelector(".first").innerHTML = displayWord;

    document.querySelector(".name-filter").value = "";
    document.querySelector(".color-filter").value = "";
    document.querySelector(".cost-filter").value = "";
    document.querySelector(".power-filter").value = "";
    document.querySelector(".type-filter").value = "";
    document.querySelector(".subtype-filter").value = "";
    document.querySelector(".effect-filter").value = "";

    filteredList = data;
  });

  enterListener(".name-filter", filteredList, data);
  enterListener(".color-filter", filteredList, data);
  enterListener(".cost-filter", filteredList), data;
  enterListener(".power-filter", filteredList, data);
  enterListener(".type-filter", filteredList, data);
  enterListener(".subtype-filter", filteredList, data);
  enterListener(".effect-filter", filteredList, data);

  function filtered(word) {
    filteredList = filteredList.filter((value) => {
      return value.name.toLocaleUpperCase().includes(word.toLocaleUpperCase());
    });
  }

  function filterColor(color) {
    filteredList = filteredList.filter((value) => {
      return value.color
        .toLocaleUpperCase()
        .includes(color.toLocaleUpperCase());
    });
  }

  function filterCost(cost) {
    filteredList = filteredList.filter((value) => {
      return value.cost === Number(cost);
    });
  }

  function filterPower(power) {
    filteredList = filteredList.filter((value) => {
      return value.power === Number(power);
    });
  }

  function filterType(type) {
    filteredList = filteredList.filter((value) => {
      return value.type.toLocaleUpperCase() === type.toLocaleUpperCase();
    });
  }

  function filterSubtype(subtype) {
    filteredList = filteredList.filter((value) => {
      if (value.subtype === undefined) {
        return false;
      }
      return value.subtype
        .toLocaleUpperCase()
        .includes(subtype.toLocaleUpperCase());
    });
  }

  function filterEffect(effect) {
    filteredList = filteredList.filter((value) => {
      if (value.effect === undefined) {
        return false;
      }
      return value.effect
        .toLocaleUpperCase()
        .includes(effect.toLocaleUpperCase());
    });
  }

  function filterRarity(rarity) {
    filteredList = filteredList.filter((value) => {
      if (value.rarity === undefined) {
        return false;
      }
      return value.rarity.toLocaleUpperCase() === rarity.toLocaleUpperCase();
    });
  }
}

function enterListener(input, filteredList, dataNumbers) {
  document.querySelector(input).addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      document.querySelector(".name-filter").value &&
        filtered(document.querySelector(".name-filter").value);
      document.querySelector(".color-filter").value &&
        filterColor(document.querySelector(".color-filter").value);
      document.querySelector(".cost-filter").value &&
        filterCost(document.querySelector(".cost-filter").value);
      document.querySelector(".power-filter").value &&
        filterPower(document.querySelector(".power-filter").value);
      document.querySelector(".type-filter").value &&
        filterType(document.querySelector(".type-filter").value);
      document.querySelector(".subtype-filter").value &&
        filterSubtype(document.querySelector(".subtype-filter").value);
      document.querySelector(".effect-filter").value &&
        filterEffect(document.querySelector(".effect-filter").value);

      let displayWord = "";
      filteredList.forEach((value) => {
        displayWord += `<div class='image-formating' data-number="${value.number}"><img src="${value.image}" /></div>`;
      });

      document.querySelector(".first").innerHTML = displayWord;

      document.querySelector(".name-filter").value = "";
      document.querySelector(".color-filter").value = "";
      document.querySelector(".cost-filter").value = "";
      document.querySelector(".power-filter").value = "";
      document.querySelector(".type-filter").value = "";
      document.querySelector(".subtype-filter").value = "";
      document.querySelector(".effect-filter").value = "";

      filteredList = dataNumbers;
    }
  });
  function filtered(word) {
    filteredList = filteredList.filter((value) => {
      return value.name.toLocaleUpperCase().includes(word.toLocaleUpperCase());
    });
  }

  function filterColor(color) {
    filteredList = filteredList.filter((value) => {
      return value.color
        .toLocaleUpperCase()
        .includes(color.toLocaleUpperCase());
    });
  }

  function filterCost(cost) {
    filteredList = filteredList.filter((value) => {
      return value.cost === Number(cost);
    });
  }

  function filterPower(power) {
    filteredList = filteredList.filter((value) => {
      return value.power === Number(power);
    });
  }

  function filterType(type) {
    filteredList = filteredList.filter((value) => {
      return value.type.toLocaleUpperCase() === type.toLocaleUpperCase();
    });
  }

  function filterSubtype(subtype) {
    filteredList = filteredList.filter((value) => {
      if (value.subtype === undefined) {
        return false;
      }
      return value.subtype
        .toLocaleUpperCase()
        .includes(subtype.toLocaleUpperCase());
    });
  }

  function filterEffect(effect) {
    filteredList = filteredList.filter((value) => {
      if (value.effect === undefined) {
        return false;
      }
      return value.effect
        .toLocaleUpperCase()
        .includes(effect.toLocaleUpperCase());
    });
  }
}
