const getDirection = function (side) {
  if (side == "r") return "lr";
  else if (side == "l") return "rl";
  else if (side == "b") return "tb";
  else return "bt";
};
const getPage = function (pages, page) {
  if (pages.t == page) return "t";
  else if (pages.l == page) return "l";
  else if (pages.c == page) return "c";
  else if (pages.r == page) return "r";
  else return "b";
};
const setIndexes = function (direction) {
  const i = {
    lr: {
      t: "z-10",
      l: "z-30",
      c: "z-40",
      r: "z-20",
      b: "z-10",
    },
    rl: {
      t: "z-10",
      l: "z-20",
      c: "z-40",
      r: "z-30",
      b: "z-10",
    },
    bt: {
      t: "z-30",
      l: "z-10",
      c: "z-40",
      r: "z-10",
      b: "z-20",
    },
    tb: {
      t: "z-20",
      l: "z-10",
      c: "z-40",
      r: "z-10",
      b: "z-30",
    },
  };
  return i[direction];
};
const setLR = function (pages) {
  const page = { ...pages };
  page[getPage(pages, "l")] = "r";
  page[getPage(pages, "c")] = "l";
  page[getPage(pages, "r")] = "c";
  return page;
};
const setRL = function (pages) {
  const page = { ...pages };
  page[getPage(pages, "l")] = "c";
  page[getPage(pages, "c")] = "r";
  page[getPage(pages, "r")] = "l";
  return page;
};
const setBT = function (pages) {
  const page = { ...pages };
  page[getPage(pages, "t")] = "b";
  page[getPage(pages, "c")] = "t";
  page[getPage(pages, "b")] = "c";
  return page;
};
const setTB = function (pages) {
  const page = { ...pages };
  page[getPage(pages, "t")] = "c";
  page[getPage(pages, "c")] = "b";
  page[getPage(pages, "b")] = "t";
  return page;
};
const setpages = function (direction, pages) {
  if (direction == "lr") return setLR(pages);
  else if (direction == "rl") return setRL(pages);
  else if (direction == "bt") return setBT(pages);
  else return setTB(pages);
};

export const changePage = function (side, storage) {
  storage.direction = getDirection(side);
  storage.indexes = setIndexes(storage.direction);
  storage.pages = setpages(storage.direction, storage.pages);
};
