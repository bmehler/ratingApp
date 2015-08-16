describe('Unit testing directive ratingAverage', function() {
  var $compile, $rootScope;

  beforeEach(module('application'));

  beforeEach(inject(function($compile, $rootScope){
    compile = $compile;
    scope = $rootScope.$new();
    scope.data = {
      prop: '55'
    };
    directiveElem = getCompiledElement();
  }));

  function getCompiledElement() {
    var element = angular.element("<rating-average data='employee.rating'></rating-average>");
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should applied template', function () {
    expect(directiveElem.html()).not.toEqual( ' ' );
  });

  it('should have one span element', function () {
    var spanElement = directiveElem.find('span');
    expect(spanElement).toBeDefined();
    expect(spanElement.length).toEqual(1);
  });

  it('data on isolated scope should be two-way bound', function() {
    var isolatedScope = directiveElem.isolateScope();
    isolatedScope.data.prop ='55';
    expect(scope.data.prop).toEqual('55');
  });
});

describe('Unit testing directive ratingTotal', function() {
  var $compile, $rootScope;

  beforeEach(module('application'));

  beforeEach(inject(function($compile, $rootScope){
    compile = $compile;
    scope = $rootScope.$new();
    scope.percentageStyle = jasmine.createSpy('percentageStyle');
    scope.classChange = jasmine.createSpy('classChange');
    directiveElem = getCompiledElement();
  }));

  function getCompiledElement() {
    var element = angular.element("<rating-total  data='total(employee)' class-change='classChange(total(employee))' percentage-style='percentageStyle(total(employee))'></rating-total>");
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should applied template', function () {
    expect(directiveElem.html()).not.toEqual( ' ' );
  });

  it('should have one div element', function () {
    var divElement = directiveElem.find('div');
    expect(divElement).toBeDefined();
    expect(divElement.length).toEqual(1);
  });

  it('should have updated text in span', function () {
    scope.text = '%';
    scope.$digest();
    var divElement = directiveElem.find('div');
    expect(divElement.text()).toEqual(scope.text);
  });

  it('classChange should be a function', function(){
    var isolatedScope = directiveElem.isolateScope();
    expect(typeof(isolatedScope.classChange)).toEqual('function');
  });

  it('percentStyle should be a function', function(){
    var isolatedScope = directiveElem.isolateScope();
    expect(typeof(isolatedScope.percentageStyle)).toEqual('function');
  });

  it('should call classChange method of scope when invoked from isolated scope', function () {
    var isolatedScope = directiveElem.isolateScope();
    isolatedScope.classChange();
    expect(scope.classChange).toHaveBeenCalled();
  });

  it('should call percentStyle method of scope when invoked from isolated scope', function () {
    var isolatedScope = directiveElem.isolateScope();
    isolatedScope.percentageStyle();
    expect(scope.percentageStyle).toHaveBeenCalled();
  });
});
