export const getStorage = (): { lang: string } => {
  const getLocal = localStorage.getItem("lang");
  if (getLocal) {
    return JSON.parse(getLocal);
  }

  return { lang: "ru" };
};

export const setStorage = (item: string) => {
  localStorage.setItem("lang", JSON.stringify({ lang: item }));
  window.location.reload();
};
