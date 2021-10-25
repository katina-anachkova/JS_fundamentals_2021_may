function solve(input) {

    class Person{
        constructor(name,id){
        this.name = name;
        this.id = id;
        }
        print(){
           console.log(`Name: ${this.name} -- Personal Number: ${this.id}`);
        }
    }
    for (let i = 0; i < input.length; i++) {
        let name = input[i];
        let id = input[i].length;
        let person = new Person(name,id); // console.log(`Name: ${name} -- Personal Number: ${id}`)
        person.print()
    }

}

