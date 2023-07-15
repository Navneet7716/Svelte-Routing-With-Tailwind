export const applyTheme = (theme: string = "default") => {
    let newTheme = theme;
    const html = document.getElementsByTagName("html")[0];
    localStorage.setItem("theme", theme);
    (html as any).setAttribute("data-theme", newTheme);
};
