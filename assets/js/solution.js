new URL("https://www.facebook.com/DwayneJohnson"); // {hostname}
new Map().set("www.facebook.com", "src to fb icon"); // key - hostname

const baseLink = new URL(responseData.contacts);

const dataLink = new Map()
  .set("www.facebook.com", "./assets/css/img/facebook.svg")
  .set("www.instagramm.com", "./assets/css/img/instagram.svg")
  .set("www.twitter.com", "./assets/css/img/twitter");

const cardContainer = document.getElementById("cards");

const cards = data.map((place) => createPlaceCardElement(place));

cardContainer.append(...cards);

function createElement(type, { classNames, onClick, attributes }, children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue);
  }
  elem.append(...children);
  return elem;
}

function createUserCard(place) {
  const { desc, name } = place;

  const p = createElement(
    "p",
    { classNames: ["cardDescription", "userPosition"] },
    [document.createTextNode(desc || ""), document.createTextNode(desc || "")]
  );

  const h2 = createElement("h2", { classNames: ["cardName"] }, [
    document.createTextNode(name),
    document.createTextNode(surname),
  ]);

  // const a = createElement('a', { classNames: ''}, [

  // ])

  // const li = createElement('li' , {classNames:['userContact'] }[

  // ])

  // const img = createCardImage(place);

  // const ul = createElement('ul' , {classNames:['userContacts'] }[

  // ])

  const article = createElement("article", { classNames: ["cardContainer"] }, [
    img,
    h2,
    p,
    p,
    ul > [...li],
  ]);

  const wrapper = createElement("li", { classNames: ["cardWrapper"] }, [
    article,
  ]);

  return wrapper;
}
