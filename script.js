function Person(n, a){
  this.name = n;
  this.age = a;
  this.introduce = function(){
    return `제 이름은 ${this.n}이고 ${this.a}살 입니다.`
  }
}




const person1 = new Person('철수', 12)
const person2 = new Person('영희', 15)
const person3 = new Person('가영', 30)
const person4 = new Person('비실', 29)




/* 생성자 함수
1. 함수의 이름의 첫 글자는 대문자로 시작합니다.
2. 반드시 new 연산자와 붙여 실행합니다.
*/
/* 
인스턴스 : 생성자 함수로 생성되는 객체 데이터를 가리키는 용어
위의 상황에서는 person1, person2, person3, person4, person5가 인스턴라고 불린다.

인스턴스는 함수라 아니라 1:1로 매칭되는 prototype 객체는 없지만 prototype 내부 슬롯은 있다. __proto__ = [[Prototype]]

Person(생성자 함수).prototype = Person Prototype object
person1(인스턴스).__proto__ (내부 슬롯) = Person Prototype object

Person.prototype === person1.__proto__
===> true

그러므로 person1.__proto__.constructor의 값은 자기 자신의 생성자 함수가 된다(Person function)

Person.prototype.constructor == person1.__proto_.constructor

이렇게 인스턴스가 자기 자신의 생성자 함수로 돌아가는 것을 Prototype chain이라고 불린다.

마지막으로 person1.__proto__constructor에서 내부슬롯(__proto__)을 생략할 수 있다.

말하자면 person1.__proto__constructor === person1.constructor 가 같다는 것이다.

다만 내부 this 키워가 바인딩 되는 점이 있다. 
*/