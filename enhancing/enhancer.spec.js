const { expect } = require('@jest/globals');
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
});

describe("enchantment success", ()=>{
    const item = {
        name: "Sword",
        durability: 30,
        enchantment: 3
    }

    it("Should increase enchant level by 1", ()=>{
        expect(enhancer.success(item).enchantment).toBe(4);
    });

    it("Should not increase enchantment if it's at max", ()=>{
        item.enchantment = 20;
        expect(enhancer.success(item).enchantment).toBe(20);
    });

    it("Should not affect durability", ()=>{
        expect(enhancer.success(item).durability).toBe(30);
    });
});

describe("enchantment fail", ()=>{
    const item = {
        name: "Sword",
        durability: 30,
        enchantment: 3
    }

    it("Should decrease durability by 5 if enchantment is less than 15", ()=>{
        expect(enhancer.fail(item).durability).toBe(25);
    });

    it("Should decrease durability by 10 if enchanment is 15 or greater", ()=>{
        item.enchantment = 15;
        expect(enhancer.fail(item).durability).toBe(20);
    });

    it("Should decrease enchantment by 1 if enchantment is 16 or greater", ()=>{
        item.enchantment = 16;
        const newItem = enchancer.fail(item);
        expect(newItem.enchantment).toBe(15);
        expect(newItem.durability).toBe(20);
    });
});