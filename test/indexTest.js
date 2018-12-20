const expect = chai.expect;

describe('index.js', function () {
  describe('drivers', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });

    it('is declared with const', function () {
      expect(function () { drivers = []; }).to.throw(TypeError);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      drivers.length = 0;

      drivers.push('Milo', 'Otis', 'Garfield');
    });

    describe('appendDriver', function () {
      it('appends a driver to the end of the drivers array', function () {
        appendDriver('Ralph');

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('prependDriver', function () {
      it('prepends a driver to the beginning of the drivers array', function () {
        prependDriver("Bob");

        expect(drivers).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeLastDriver()', function () {
      it('removes the last driver from the drivers array', function () {
        removeLastDriver();

        expect(drivers).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('removeFirstDriver()', function () {
      it('removes the First driver from the drivers array', function () {
        RemoveFirstDriver();

        expect(drivers).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });
  });
});
