(function () {
  'use strict';

  describe('Rawmaterials Route Tests', function () {
    // Initialize global variables
    var $scope,
      RawmaterialsService;

    // We can start by loading the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function ($rootScope, _RawmaterialsService_) {
      // Set a new global scope
      $scope = $rootScope.$new();
      RawmaterialsService = _RawmaterialsService_;
    }));

    describe('Route Config', function () {
      describe('Main Route', function () {
        var mainstate;
        beforeEach(inject(function ($state) {
          mainstate = $state.get('rawmaterials');
        }));

        it('Should have the correct URL', function () {
          expect(mainstate.url).toEqual('/rawmaterials');
        });

        it('Should be abstract', function () {
          expect(mainstate.abstract).toBe(true);
        });

        it('Should have template', function () {
          expect(mainstate.template).toBe('<ui-view/>');
        });
      });

      describe('View Route', function () {
        var viewstate,
          RawmaterialsController,
          mockRawmaterial;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          viewstate = $state.get('rawmaterials.view');
          $templateCache.put('modules/rawmaterials/client/views/view-rawmaterial.client.view.html', '');

          // create mock Rawmaterial
          mockRawmaterial = new RawmaterialsService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Rawmaterial Name'
          });

          // Initialize Controller
          RawmaterialsController = $controller('RawmaterialsController as vm', {
            $scope: $scope,
            rawmaterialResolve: mockRawmaterial
          });
        }));

        it('Should have the correct URL', function () {
          expect(viewstate.url).toEqual('/:rawmaterialId');
        });

        it('Should have a resolve function', function () {
          expect(typeof viewstate.resolve).toEqual('object');
          expect(typeof viewstate.resolve.rawmaterialResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(viewstate, {
            rawmaterialId: 1
          })).toEqual('/rawmaterials/1');
        }));

        it('should attach an Rawmaterial to the controller scope', function () {
          expect($scope.vm.rawmaterial._id).toBe(mockRawmaterial._id);
        });

        it('Should not be abstract', function () {
          expect(viewstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(viewstate.templateUrl).toBe('modules/rawmaterials/client/views/view-rawmaterial.client.view.html');
        });
      });

      describe('Create Route', function () {
        var createstate,
          RawmaterialsController,
          mockRawmaterial;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          createstate = $state.get('rawmaterials.create');
          $templateCache.put('modules/rawmaterials/client/views/form-rawmaterial.client.view.html', '');

          // create mock Rawmaterial
          mockRawmaterial = new RawmaterialsService();

          // Initialize Controller
          RawmaterialsController = $controller('RawmaterialsController as vm', {
            $scope: $scope,
            rawmaterialResolve: mockRawmaterial
          });
        }));

        it('Should have the correct URL', function () {
          expect(createstate.url).toEqual('/create');
        });

        it('Should have a resolve function', function () {
          expect(typeof createstate.resolve).toEqual('object');
          expect(typeof createstate.resolve.rawmaterialResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(createstate)).toEqual('/rawmaterials/create');
        }));

        it('should attach an Rawmaterial to the controller scope', function () {
          expect($scope.vm.rawmaterial._id).toBe(mockRawmaterial._id);
          expect($scope.vm.rawmaterial._id).toBe(undefined);
        });

        it('Should not be abstract', function () {
          expect(createstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(createstate.templateUrl).toBe('modules/rawmaterials/client/views/form-rawmaterial.client.view.html');
        });
      });

      describe('Edit Route', function () {
        var editstate,
          RawmaterialsController,
          mockRawmaterial;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          editstate = $state.get('rawmaterials.edit');
          $templateCache.put('modules/rawmaterials/client/views/form-rawmaterial.client.view.html', '');

          // create mock Rawmaterial
          mockRawmaterial = new RawmaterialsService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Rawmaterial Name'
          });

          // Initialize Controller
          RawmaterialsController = $controller('RawmaterialsController as vm', {
            $scope: $scope,
            rawmaterialResolve: mockRawmaterial
          });
        }));

        it('Should have the correct URL', function () {
          expect(editstate.url).toEqual('/:rawmaterialId/edit');
        });

        it('Should have a resolve function', function () {
          expect(typeof editstate.resolve).toEqual('object');
          expect(typeof editstate.resolve.rawmaterialResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(editstate, {
            rawmaterialId: 1
          })).toEqual('/rawmaterials/1/edit');
        }));

        it('should attach an Rawmaterial to the controller scope', function () {
          expect($scope.vm.rawmaterial._id).toBe(mockRawmaterial._id);
        });

        it('Should not be abstract', function () {
          expect(editstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(editstate.templateUrl).toBe('modules/rawmaterials/client/views/form-rawmaterial.client.view.html');
        });

        xit('Should go to unauthorized route', function () {

        });
      });

    });
  });
}());
