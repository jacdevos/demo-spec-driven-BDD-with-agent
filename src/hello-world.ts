export function greet(language?: 'English' | string): string {
    if (language === "English") {
        return "hello world";
    }
    return "👋";
}
