let hexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

const fn = require("./index.js")
console.log(fn)
describe('TransformDecimalToHex', function () {
    it.concurrent('should return F', function () {
        let res = fn(1)
        expect(res).toBe("1")
    })

    it.only('should return 20', function () {
        let res = fn(32)
        expect(res).toBe("20")
    })

    it.concurrent('should return 81382', function () {
        let res = fn(529282)
        expect(res).toBe("81382")
    })

})