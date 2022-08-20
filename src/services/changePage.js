import { changePageDirectly, changePage } from "@/services/pageChangeAnimation";

export const setPageFunction = function (side, pageStorage, dCounter, direct) {
  pageStorage.setSide(side);
  setTimeout(dCounter, pageStorage.time);
  direct
    ? changePageDirectly(side, pageStorage)
    : changePage(side, pageStorage);
};
export const setPage = function (
  side,
  pageStorage,
  iCounter,
  dCounter,
  direct
) {
  if (pageStorage.side == side || pageStorage.side == "") {
    if (iCounter() == 0) setPageFunction(side, pageStorage, dCounter, direct);
  }
};
export const changePageListener = function (
  nVal,
  oVal,
  side,
  pageStorage,
  dCounter,
  direct
) {
  if (nVal < oVal && nVal != 0) {
    setPageFunction(side, pageStorage, dCounter, direct);
  }
  if (nVal == 0) pageStorage.setSide("");
};
