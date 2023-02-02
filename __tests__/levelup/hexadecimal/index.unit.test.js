import { transformDecimalToHexWithoutRecursivity as transformDecimalToHex } from "../../../levelup/hexadecimal/index.js";

describe('TransformDecimalToHex', function () {
    it.concurrent('should return F', function () {
        let res = transformDecimalToHex(1)
        expect(res).toBe("1")
    })

    it.concurrent('should return 20', function () {
        let res = transformDecimalToHex(32)
        expect(res).toBe("20")
    })

    it.concurrent('should return 81382', function () {
        let res = transformDecimalToHex(529282)
        expect(res).toBe("81382")
    })

})