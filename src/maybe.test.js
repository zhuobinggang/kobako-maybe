/**
 * Created by kobako on 2018/6/9.
 */

const assert = require('assert').strict
const M = require('./maybe')


    test_is_just_and_nothing()
    test_map()
    test_maybe()
    test_value()
    console.log("Test success!")


function test_maybe(){
    assert.deepEqual(M.maybe(null),M.nothing(),"Test maybe nothing error")
    assert.deepEqual(M.maybe('your father'),M.just('your father'),"Test maybe just error")
}

function test_is_just_and_nothing(){
    assert.deepEqual(true,M.isJust(M.just(1)),"Just should be a just")
    assert.deepEqual(false,M.isJust(M.nothing()),"Nothing shouldn't be a just")
    
    assert.deepEqual(true,M.isNothing(M.nothing()),"Nothing should be a nothing")
    assert.deepEqual(false,M.isNothing(M.just(1)),"Just shouldn't be a nothing")
}

function test_value(){
    assert.deepEqual(1,M.value(M.just(1)),"Value of just 1 should be 1")
}

function test_map(){
    assert.deepEqual(2,M.map(v => v+1,M.just(1)),"Map inc to Just 1 should get result 2")
}