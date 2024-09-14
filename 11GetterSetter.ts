// By using getters and setters, you add a layer of control over how values are accessed and modified, which contributes to making your code safer and more reliable. Here’s how this approach helps with safety, though it’s not quite the same as encryption:

// Controlled Access: With getters and setters, you control who can access or modify your private data. For instance, you might allow only certain methods or parts of your code to change a value, while others can only read it. This prevents unintended or unauthorized changes.

// Validation: Setters can include logic to validate the input before changing the value. For example, if you have an age property, you can make sure that only positive numbers are set. This prevents invalid data from being stored.

// Encapsulation: By keeping data private and providing controlled access through getters and setters, you prevent other parts of the program from directly tampering with the data. This means you can make changes to the internal implementation without affecting other code that uses your class.

// Read-Only Access: Getters allow you to provide read-only access to certain data. This means that while other parts of your code can see the value, they cannot change it, ensuring that important values remain unchanged.


class person {

    private _name: string;
    private _age: number;
    private _email: string;

    constructor(name: string, age: number, email: string) {
        this._name = name;
        this._age = age;
        this._email = email;
    }

    get name()  : string{
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get age() : number {
        return this._age;
    }
    set age(value: number) {
        if (value < 0) {    
            throw new Error('Age cannot be negative');
        } else { this._age = value; }
    }

    get email() : string {
        return this._email;
    }
    set email(value: string) {
            this._email = value;
        
    }
}


let person1 = new person('bhautik', 23, '2gkWz@example.com');
person1.age = -5;
person1.email = 'test'; 