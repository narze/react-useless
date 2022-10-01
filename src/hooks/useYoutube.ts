export function useYoutube(text: string) {
    if(window != null && window != undefined){
        window.open(`https://www.youtube.com/results?search_query=${text}`)
    }
}