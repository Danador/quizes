export const copyQuizUrl = (variable: string) => {
    const navigator = window.navigator.clipboard;
    navigator.writeText(variable);
};
