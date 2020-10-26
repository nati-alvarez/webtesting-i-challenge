const enhancer = require('./enhancer.js');
// test away!

describe("repair", ()=>{
    it("Should return an item with with a durability of 100", ()=>{
        const item = {
            name: "Sword",
            durability: 30,
            enchantment: 3
        }
        expect(enhancer.repair(item).durability).toBe(100);
    });
})