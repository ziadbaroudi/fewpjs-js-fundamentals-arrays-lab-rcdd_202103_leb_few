const expect = chai.expect;

describe('index.js', function () {
  describe('drivers arrays', function () {
    it('they are assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(append).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      expect(prepend).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      expect(removeLast).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      expect(removeFirst).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });

    it('are declared with const', function () {
      expect(function () { append = []; }).to.throw(TypeError);
      expect(function () { prepend = []; }).to.throw(TypeError);
      expect(function () { removeLast = []; }).to.throw(TypeError);
      expect(function () { removeFirst = []; }).to.throw(TypeError);
    });
  });

  describe('Array functions', function () {
    describe('append', function () {
      it('appends driver "Odie" to the end of the drivers array', function () {
        expect(append).to.have.ordered.members(["Milo", "Otis", "Garfield", "Odie"]);
      });
    });

    describe('prependDriver', function () {
      it('prepends a driver to the beginning of the drivers array', function () {
        expect(prepend).to.have.ordered.members(["Odie", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeLastDriver()', function () {
      it('removes the last driver from the drivers array', function () {
        expect(removeLast).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('removeFirstDriver()', function () {
      it('removes the First driver from the drivers array', function () {
        expect(removeFirst).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });
  });
});
