import charwise from "charwise";
const RE_PATH = /^(\/[a-zA-Z0-9.#_:-]+)+$/

export const lexicographic_path =  {
    type: 'lexicographic-path',

    encode(path:string) {
        if (!RE_PATH.test(path)) throw new Error("Incorrect path!")
        return charwise.encode(path.slice(1).split("/"))
    },

    decode(encoded:string) {
        const segments = charwise.decode(encoded)
        if (!Array.isArray(segments)) throw new Error("Incorrect path!")
        const path = segments.map(txt => "/" + txt).join("")
        if (!RE_PATH.test(path)) throw new Error("Incorrect path!")
        return path
    },
    buffer: false
}

export default lexicographic_path
