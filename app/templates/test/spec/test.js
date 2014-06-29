/*global define, describe, it */
'use strict';

define(function(require) {

  var board = require('game');

  // Test test
  describe('Give it some context', function() {
    describe('maybe a bit more context here', function() {
      it('should run here few assertions', function() {
        expect([1,2,3].indexOf(5)).to.equal(-1);
      });
    });
  });

  // Board tests
  describe('Test the board', function() {
    describe('Squares', function() {
      it('should have three arrays of squares', function() {
        expect(board.spaces()).to.have.length(3);
      });
      it('should have three squares per array', function() {
        for (var i=0;i<board.spaces().length-1;i++) {
          expect(board.spaces()[i]).to.have.length(3);
        }
      });
    });
    describe('Rows', function() {
      it('should have eight rows', function() {
        expect(board.rows()).to.have.length(8);
      });
      it('should have three squares per row', function() {
        for (var i=0;i<board.rows().length-1;i++) {
          expect(board.rows()[i].spaces()).to.have.length(3);
        }
      });
    });
  });


});

