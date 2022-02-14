export const changeCssVariables = (theme) => {
  const root = document.querySelector(':root');

  const cssVariables = ['body-bg', 'color'];

  cssVariables.forEach((el) => {
    root.style.setProperty(`--theme-default-${el}`, `var(--theme-${theme}-${el})`);
  });
};
