const googleUrl = 'https://www.google.com/search?q='

export function useGoogle() {
    return (text: string) => {
        if (window != undefined && window != null) {
            window.open(googleUrl + text, '_blank');
        }
    }
}
