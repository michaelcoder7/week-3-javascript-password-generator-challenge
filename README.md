# week-3-javascript-password-generator-challenge

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Additions made to the JavaScript Code

Constant variables were added to define all the various character types which could be selected to generate our password

The Prompt codes were added with conditional statements as required to generate the required prompts for the password generation 

Conditional statements were also added to make sure that atleast one character type was chosen

The password variable and master array were also added to the code

A loop for the password generation was also added inorder to generate the password, provided the user's choices meet the conditions set by the conditional statements which were made for the character choice options, which in turn returs the generated password to the 'generatePassword' function

## Screenshot of password generator web application

<img width="1163" alt="password-generator-screenshot" src="https://user-images.githubusercontent.com/128432461/234093254-1bd16783-0402-4328-80a6-d39d4ee13781.png">

## Link to deployed Function

https://michaelcoder7.github.io/week-3-javascript-password-generator-challenge/
