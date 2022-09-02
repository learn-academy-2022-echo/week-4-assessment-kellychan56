# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is as the name states: programming that is centered around objects. Objects are the intersection of data and behavior, so we are able to collect data and manipulate it how we would like. With OOP, we are able to have blocks of code with data and methods that are contained within that scope and meant for the objects. This encapsulation allows for manipulation of code that will not affect code outside of the scope. Functional programming, on the other hand is focused around writing functions that can take in any argument and is not centered around objects.

Researched answer: Object-oriented programming is centered around objects. Objects are typically instances of a class, and functions of a class are called methods. These methods pertain only to the class and the objects created by them, so the encapsulation allows for the scope of the code to be contained. This allows for more manipulation of data with changing state and methods. Therefore if there is any error or bug in code, it should not affect other classes or areas of code. With functional programming, functions are the focus point of the language. We write functions to manipulate data without changing states. The data being manipulated is typically immutable. As the functions are written for immutable data, it should be able to be invoked and reused whenever.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: Floats and integers are both numbers, and in Ruby, Float and Integer are two different classes. Floats are numbers with decimals, and even what what we could consider a whole number like 8.0 would be considered a float because there is a decimal point. Meanwhile, integers are just whole numbers. Both can be used to perform arithmetic and are used in methods.

Researched answer: In Ruby, numbers can be classified as an Integer or a Float. Integers are whole numbers that can have a positive, negative, or zero value. Floats are numbers that contain a fractional part, so any number with a decimal. When we perform arithmetic with these two classes, performing operations with two integers will result in an integer. And if a float is involved in the arithmetic, the result will be a float.

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return is a one that does not require the keyword "return". This is how Ruby returns methods. Every method in Ruby starts with a defining keyword and ends in "end". Within this scope of the method, the last line of code before end is always the return.

Researched answer: Ruby automatically returns the last line of code in a block, so it is not necessary to write the "return" keyword to receive a return. It is implied that the last line of code that is executed will be the return.

def add_two num
    num + 2
end

In this method, there is no return keyword, but Ruby knows to return num + 2 as it is the last line of code in the method to be executed.

4. What is a block in Ruby?

Your answer: A block in Ruby contains code that that can be passed onto a method to determine what that method does. It is an anonymous function that typically starts with "do" and ends with "end". Within the do/end, we can create behavior that passes through the method rather than just data. Whatever code is written within the code determines the scope, so any variables or data written within the block is not accessible outside of it.

Researched answer: A block in Ruby is an anonymous function. It does not have a name but is used to manipulate data in methods with behavior. They contain chunks of code that can take an argument and return a value. In Ruby, the scope of a block is determined with the keywords "do" and "end". The parameters passed through blocks are written inside pipes ||. When using enumerables, we typically use blocks to write the behavior that we want to execute.

num_array = [2, 3, 4, 5]

num_array.map do |num|
    num + 2
end
==> [4, 5, 6, 7]

5. What is an instance variable in Ruby?

Your answer: An instance variable in Ruby is created inside a Class and can only be used in reference to that class and the objects created from that class. Just as objects are instances of of a class, there are instance variables that are relative to those classes and objects. When we create classes in Ruby, we may want to write variables for data that we can manipulate. We create instance variables with the @ symbol and can access them outside of the class by using setter and getter methods.

Researched answer: An instance variable in Ruby is written with the @ symbol followed by the variable name. They can only be accessed within the scope of the class it is written in. If we want to access it outside of the class to create objects, we need to use setter and getter methods. We can assign the instance variable with a setter method, or use initialize to have the attribute when creating a new object. Then to access it, we use a getter method so that we can call of the variable outside of the class. Another way to do this is with attr_accessor. It provides a quick way of accessing instance variables without the need for setter and getter methods.

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostgreSQL is an open-source database system that allows us to store data. It is open to the public and can be downloaded, modfied, and reused.

2. Ruby on Rails: Ruby on Rails is a full-stack framework that allows us to create applications with front-end and back-end development. This is difference from Ruby, as Ruby is a programming language, and Ruby on Rails is built on the Ruby language.

3. ORM: ORM stands for object relational mapper. In Ruby on Rails, it takes the data stored in databases and allows you to interact with it as if it were a Ruby object.

4. Active Record: This is the ORM for Rails. It takes the data in a table and allows us to interact with it like a Ruby object.

5. Migrations: Migrations allow you to change the database and have a version control for the database so that it is not directly affected.
