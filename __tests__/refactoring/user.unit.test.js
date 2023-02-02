import User from "../../refactoring/user.js";

describe('User', function () {
    it.concurrent('should return firstName as empty string', function () {
        let user = new User()
        expect(user.getFirstName()).toBe("")
    })

    it.concurrent('should return lastName as empty string', function () {
        let user = new User()
        expect(user.getLastName()).toBe("")
    })

    it.concurrent('should return age of -1', function () {
        let user = new User()
        expect(user.getAge()).toBe(-1)
    })

    it.concurrent('should set firstName to test', function () {
        let user = new User()
        user.setFirstName("test")
        expect(user.getFirstName()).toBe("test")
    })

    it.concurrent('should set lastName to test', function () {
        let user = new User()
        user.setLastName("test")
        expect(user.getLastName()).toBe("test")
    })

    it.concurrent('should set age to 18', function () {
        let user = new User()
        user.setAge(18)
        expect(user.getAge()).toBe(18)
    })
})