/**
 * Created by kobako on 2018/6/9.
 */

const assert = require('assert').strict
const M = require('./maybe')





function test_maybe() {
    assert.deepEqual(M.maybe(null), M.nothing(), "Test maybe nothing error")
    assert.deepEqual(M.maybe('your father'), M.just('your father'), "Test maybe just error")
}

function test_is_just_and_nothing() {
    assert.ok(M.isJust(M.just(1)), "Just should be a just")
    assert.deepEqual(false, M.isJust(M.nothing()), "Nothing shouldn't be a just")

    assert.ok(M.isNothing(M.nothing()), "Nothing should be a nothing")
    assert.deepEqual(false, M.isNothing(M.just(1)), "Just shouldn't be a nothing")
}

function test_value() {
    assert.deepEqual(1, M.value(M.just(1)), "Value of just 1 should be 1")
}

function test_map() {
    assert.deepEqual(M.just(2), M.map(v => v + 1, M.just(1)), "Map inc to Just 1 should get result 2")
}

function test_or(){
    assert.deepEqual(2,M.or(M.map(x => x+1,M.just(1)),-1))
    assert.deepEqual(-1,M.or(M.map(x => x+1,M.nothing()),-1))
}

test_is_just_and_nothing()
test_map()
test_maybe()
test_value()
test_or()
console.log("Test success!")