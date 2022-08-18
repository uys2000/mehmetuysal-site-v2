const getDirection = function (side) {
  if (side == "r") return "lr";
  else if (side == "l") return "rl";
  else if (side == "b") return "tb";
  else return "bt";
};
const setLR = function (pages) {
  const p = { ...pages };
  p.r = pages.l;
  p.c = pages.r;
  p.l = pages.c;
  return p;
};
const setRL = function (pages) {
  const p = { ...pages };
  p.r = pages.c;
  p.c = pages.l;
  p.l = pages.r;
  return p;
};
const setBT = function (pages) {
  const p = { ...pages };
  p.t = pages.b;
  p.c = pages.t;
  p.b = pages.c;
  return p;
};
const setTB = function (pages) {
  const p = { ...pages };
  p.t = pages.c;
  p.c = pages.b;
  p.b = pages.t;
  return p;
};
const setPages = function (direction, pages) {
  if (direction == "lr") return setLR(pages);
  else if (direction == "rl") return setRL(pages);
  else if (direction == "bt") return setBT(pages);
  else return setTB(pages);
};

export const changePage = function (side, storage) {
  storage.direction = getDirection(side);
  storage.pages = setPages(storage.direction, storage.pages);
};
