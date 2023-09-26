(function () {
  const myCarouselElement = document.querySelector(
    "#carouselExampleIndicators"
  );

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: true,
  });

  const handleSwitch = (
    allNumber = 3,
    text = ["text 1", "text 2", "text 3"],
    title = "text 1",
    componentNum = 0
  ) => {
    const namesSelectors = [
      ".first_card",
      ".switch-nav",
      ".card-title",
      ".card-switch__body",
      ".switch-card",
      ".switch-svg",
      ".switch-text",
      ".switch-card-text",
    ];
    let isHidden = true;
    let nowNumber = 1;
    const firstCard = document.querySelector(namesSelectors[0] + componentNum);
    const switchNav = document.querySelector(namesSelectors[1] + componentNum);
    const cardTitle = document.querySelector(namesSelectors[2] + componentNum);
    const cardBody = document.querySelector(namesSelectors[3] + componentNum);
    const switchCard = document.querySelector(namesSelectors[4] + componentNum);
    const svgSwitchCard = document.querySelector(
      namesSelectors[5] + componentNum
    );
    const textSwitchCard = document.querySelector(
      namesSelectors[6] + componentNum
    );
    const switchCardText = document.querySelector(
      namesSelectors[7] + componentNum
    );

    cardTitle.textContent = title;

    cardTitle.classList.add("ms-0", "mb-3");

    const hiddenLogo = `<svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="20"
                transform="rotate(-90 20 20)"
                fill="#F3F3F3"
              />
              <path d="M24 18L24 24" stroke="black" stroke-linecap="round" />
              <path
                d="M16 16L23.2426 23.2426"
                stroke="black"
                stroke-linecap="round"
              />
              <path d="M24 24L18 24" stroke="black" stroke-linecap="round" />
            </svg>`;

    const openLogo = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" transform="rotate(-90 20 20)" fill="#F3F3F3"/>
    <path d="M18 16L24 16" stroke="black" stroke-linecap="round"/>
    <path d="M16 24L23.2426 16.7574" stroke="black" stroke-linecap="round"/>
    <path d="M24 16L24 22" stroke="black" stroke-linecap="round"/>
    </svg>
    `;

    const rightLogo = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" transform="rotate(-90 20 20)" fill="#F3F3F3"/>
    <path d="M21.4142 15.7573L25.6569 20" stroke="black" stroke-linecap="round"/>
    <path d="M14.3431 20L24.5858 20" stroke="black" stroke-linecap="round"/>
    <path d="M25.6569 20L21.4142 24.2426" stroke="black" stroke-linecap="round"/>
    </svg>
    `;

    const leftLogo = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" transform="rotate(90 20 20)" fill="#F3F3F3"/>
<path d="M18.5854 24.2427L14.3428 20" stroke="black" stroke-linecap="round"/>
<path d="M25.6567 20L15.4141 20" stroke="black" stroke-linecap="round"/>
<path d="M14.3433 20L18.5859 15.7574" stroke="black" stroke-linecap="round"/>
</svg>
    `;

    const container = document.createElement("div");
    const numbers = document.createElement("p");
    const divSvg = document.createElement("div");
    const divLeftSvg = document.createElement("div");
    const titleCardHidden = document.createElement("p");
    const anotherTitleCardHidden = document.createElement("p");

    divSvg.innerHTML = rightLogo;
    divLeftSvg.innerHTML = leftLogo;
    numbers.textContent = `${nowNumber} / ${allNumber}`;
    container.append(numbers);
    container.append(divSvg);

    divSvg.classList.add("cursor-pointer");
    divLeftSvg.classList.add("cursor-pointer");
    numbers.classList.add("m-0", "me-3");
    container.classList.add("ms-auto", "d-flex", "align-items-center");

    function createCardText() {
      switchCardText.textContent = text[nowNumber - 1];
      if (window.innerWidth < 1000) {
        return;
      }
      if (window.innerWidth < 1200 && text[nowNumber - 1].length > 150) {
        const newText = text[nowNumber - 1].slice(0, 150) + "...";
        switchCardText.textContent = newText;
      }
    }

    createCardText();

    titleCardHidden.textContent = "AirdropHunter’s NEWS";

    anotherTitleCardHidden.textContent = title;

    if (window.innerWidth < 760) {
      anotherTitleCardHidden.textContent = title.slice(0, 20) + "...";
    }

    titleCardHidden.classList.add("title-card__hidden");
    anotherTitleCardHidden.classList.add("title-anothercard__hidden");

    switchCard.append(titleCardHidden);
    switchCard.append(anotherTitleCardHidden);

    function changeTextSvg() {
      if (!isHidden) {
        svgSwitchCard.innerHTML = hiddenLogo;
        textSwitchCard.textContent = "Show";
        switchCard.classList.add("d-flex");
        container.classList.add("d-none");
        switchCard.style.padding = "20px";
        titleCardHidden.classList.remove("d-none");
        anotherTitleCardHidden.classList.remove("d-none");
      } else {
        svgSwitchCard.innerHTML = openLogo;
        textSwitchCard.textContent = "Hide";
        switchCard.append(container);
        container.classList.remove("d-none");
        titleCardHidden.classList.add("d-none");
        anotherTitleCardHidden.classList.add("d-none");
        switchCard.style.padding = "0px";
        cardBody.append(switchCard);
      }
    }

    switchNav.addEventListener("click", () => {
      if (isHidden) {
        firstCard.append(switchCard);
      }
      isHidden = !isHidden;
      changeTextSvg();
    });

    divSvg.addEventListener("click", () => {
      if (nowNumber + 1 === allNumber) {
        divSvg.remove();
        container.append(divLeftSvg);
      }

      nowNumber = nowNumber + 1;
      numbers.textContent = `${nowNumber} / ${allNumber}`;

      createCardText();
      divSvg.before(divLeftSvg);
    });

    divLeftSvg.addEventListener("click", () => {
      if (nowNumber - 1 >= 1) {
        container.append(divSvg);
      }
      if (nowNumber - 1 === 1) {
        divLeftSvg.remove();
      }

      nowNumber = nowNumber - 1;
      numbers.textContent = `${nowNumber} / ${allNumber}`;
      createCardText();
    });

    changeTextSvg();
  };

  const handleSlide = () => {
    const buttonSlide = document.querySelectorAll(".slide-btn");
    const pagginationsLeft = document.querySelector(".carousel-control-prev");
    const paggiNext = document.querySelector(".carousel-control-next");
    const arrayButtons = document.querySelector(".carousel-indicators");

    const navItems = {
      "bg-img-1": {
        title: "StarkNet",
        desc: "Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.",
        probality: "65%",
      },
      "bg-img-2": {
        title: "LayerZero",
        desc: "LayerZero is an Omnichain communication protocol designed to simplify message passing across chains.",
        probality: "78%",
      },
      "bg-img-3": {
        title: "Polygon zkEVM",
        desc: "Polygon zkEVM Beta is the leading ZK scaling solution that is equivalent to Ethereum Virtual Machine.",
        probality: "65%",
      },
      "bg-img-4": {
        title: "fox",
        desc: "fox desc",
        probality: "65%",
      },
    };

    function createCard({ bg }) {
      const slider = document.querySelector(".cards-collection");
      const card = document.createElement("div");
      const titleCard = document.createElement("h1");
      const svg = document.createElement("div");
      const desc = document.createElement("p");
      const readMore = document.createElement("button");
      const buyButton = document.createElement("button");
      const footerCard = document.createElement("p");

      const staticsMenu = document.createElement("div");
      const staticsMenuTitle = document.createElement("p");
      staticsMenuTitle.textContent = "On artificial AI:";
      const staticDiv = document.createElement("div");
      const staticDivLeft = document.createElement("div");
      const staticDivRight = document.createElement("div");
      const staticExp = document.createElement("p");
      staticExp.textContent = "expected airdrop";
      const staticExpDesc = document.createElement("p");
      staticExpDesc.textContent = "$500 - $5 000";
      const probality = document.createElement("p");
      probality.textContent = "probability";
      const probalityNumber = document.createElement("p");
      probalityNumber.textContent = navItems[bg].probality;

      staticsMenu.classList.add(
        "d-flex",
        "flex-wrap",
        "border",
        "border-gray",
        "rounded-2",
        "p-2",
        "mb-2"
      );
      staticsMenuTitle.classList.add("w-100", "static-text");
      staticDiv.classList.add("d-flex", "justify-content-between", "w-100");
      staticExp.classList.add("static-add__text");
      probality.classList.add("static-add__text");
      staticExpDesc.classList.add("static-number");
      probalityNumber.classList.add("static-number");

      staticsMenu.append(staticsMenuTitle);
      staticDivLeft.append(staticExp);
      staticDivLeft.append(staticExpDesc);
      staticDivRight.append(probality);
      staticDivRight.append(probalityNumber);
      staticDiv.append(staticDivLeft);
      staticDiv.append(staticDivRight);
      staticsMenu.append(staticDiv);

      const listTarif = document.createElement("table");
      listTarif.innerHTML += `
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Tariff</th>
      <th scope="col">Cost, $</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr class='tr-item'>
      <td class='td-acc'>5 accounts</td>
      <td>150</td>
      <td><a class='a-item'>Detail</a></td>
    </tr>
    <tr class='tr-item'>
    <td class='td-acc'>10 accounts</td>
      <td>300</td>
      <td><a class='a-item'>Detail</a></td>
      </tr>
    <tr class='tr-item'>
    <td class='td-acc'>15 accounts</td>
    <td>450</td>
    <td><a class='a-item'>Detail</a></td>
  </tr>
  <tr class='tr-item'>
  <td class='td-acc'>20 accounts</td>
  <td>600</td>
  <td><a class='a-item'>Detail</a></td>
</tr>
<tr class='tr-item'>
<td class='td-acc'>25 accounts</td>
<td>750</td>
<td><a class='a-item'>Detail</a></td>
</tr>
<tr class='tr-item'>
<td class='td-acc'>30 accounts</td>
<td>900</td>
<td><a class='a-item'>Detail</a></td>
</tr>
  </tbody>
</table>
      `;

      const divTitle = document.createElement("div");
      divTitle.append(svg);
      divTitle.append(titleCard);

      desc.textContent = navItems[bg].desc;
      titleCard.textContent = navItems[bg].title;
      readMore.textContent = "Read more";
      footerCard.textContent = "Choose a suitable tarif and click the button";
      buyButton.textContent = "Buy";
      console.log(window.innerWidth);
      card.classList.add(
        "card",
        "d-flex",
        "flex-column",
        "p-4",
        "card-collection__item"
      );

      function adptiveWidth() {
        if (window.innerWidth < 770) {
          return 100;
        }
        if (window.innerWidth < 990) {
          return 48.6;
        }
        if (window.innerWidth < 1200) {
          return 100 / 3.08;
        }

        return 100 / 3.06;
      }

      card.style.width = `${adptiveWidth()}%`;
      svg.classList.add(bg);
      divTitle.classList.add("d-flex", "align-items-center", "mb-3");
      titleCard.classList.add("card-title");
      desc.classList.add("card-desc");
      readMore.classList.add("btn", "btn-read");
      buyButton.classList.add("btn", "buy-bottom");
      footerCard.classList.add("footer-card__text");

      card.append(divTitle);
      card.append(desc);
      card.append(readMore);
      card.append(staticsMenu);
      card.append(listTarif);
      card.append(buyButton);
      card.append(footerCard);
      slider.append(card);
      return card;
    }

    paggiNext.addEventListener("click", (e) => {
      const ch = arrayButtons.children[arrayButtons.children.length - 2];
      if (!ch.classList[0].startsWith("bg")) {
        arrayButtons.children[1].before(
          arrayButtons.children[arrayButtons.children.length - 3]
        );
        return;
      }

      arrayButtons.children[2].before(
        arrayButtons.children[arrayButtons.children.length - 2]
      );
    });

    pagginationsLeft.addEventListener("click", (e) => {
      const ch = arrayButtons.children[2];

      if (!ch.classList[0].startsWith("bg")) {
        arrayButtons.children[arrayButtons.children.length].before(ch);
      }
      arrayButtons.children[arrayButtons.children.length - 1].before(ch);
      return;
    });

    buttonSlide.forEach((el) => {
      let card;
      el.addEventListener("click", (e) => {
        const a = document.createElement("a");

        if (e.currentTarget.children.length) {
          card.remove();
          e.currentTarget.children[0].remove();
          e.currentTarget.classList.remove("activeItem");
          return;
        }

        a.classList.add(`${e.target.classList[0]}`, "backIndex");
        e.currentTarget.classList.add("activeItem");
        e.target.append(a);

        card = createCard({ bg: e.currentTarget.classList[0] });
      });
    });
  };

  const mainfucntions = () => {
    handleSwitch(
      3,
      [
        "Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup",
        "text 2",
        "text 3",
      ],
      "Starknet is a decentralized Validity-Rollup often referred",
      0
    );
    handleSwitch(
      5,
      ["item1", "item2", "item3", "item4", "item5"],
      "TITLE ANY",
      1
    );
    handleSlide();
  };

  document.addEventListener("load", mainfucntions());
})();
