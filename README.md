# Social Network API
>A back-end program that allows users to create a login and post thoughts and reactions.

## Table of contents
* [General info](#general-info)
* [Installation](#installation)
* [Functionality](#functionality)
* [Routes](#routes)
* [Status](#status)
* [Link](#link)
* [License](#license)
* [Contact](#contact)

## General info
This API will allow you to create a profile, add friends from other users, post Thoughts, and have Reactions to Thoughts.

## Installation
Steps required to install project and how to get the development environment running:

- Clone the repo to your own system.
- Run npm install from the command line in the root directory
- Invoke the application with "npm start"

This will connect you to the localhost where you will be able to test the routes in Insomnia (Or whichever program to test routes you prefer.)

## Functionality
As deescribed in the provided videos, with this API you will be able to create a User with a unique "userName" and "email". You can also add friends to users with their unique id's. Once a User is created, you can post Thoughts by that user, and have Reactions to your own or other users' thoughts as well. You also have the ability to update User's and Thought's, and can delete User's, Thought's, and Reaction's if needed.

## Routes
 - GET Users - localhost:3001/api/users
 - GET Users by ID - localhost:3001/api/users/```User ID goes here```
 - POST User - localhost:3001/api/users
 - PUT User - localhost:3001/api/users/```User ID goes here```
 - DELETE User - localhost:3001/api/users/```User ID goes here```

 - POST Friend - localhost:3001/api/users/```User ID goes here```/friends/```Friend ID goes here```
 - DELETE Friend - localhost:3001/api/users/```User ID goes here```/friends/```Friend ID goes here```

 - GET Thoughts - localhost:3001/api/thoughts
 - GET Thoughts by ID - localhost:3001/api/thoughts/```Thoughts ID goes here```
 - POST Thoughts - localhost:3001/api/thoughts/```User ID goes here```
 - PUT Thoughts - localhost:3001/api/thoughts/```Thoughts ID goes here```
 - DELETE Thoughts - localhost:3001/api/thoughts/```Thoughts ID goes here```

 - POST Reaction - localhost:3001/api/thoughts/```Thoughts ID goes here```/reactions
 - DELETE Reaction - localhost:3001/api/thoughts/```Thoughts ID goes here```/reactions/```Reaction ID goes here```

## Status
Project is: _complete_ (for now)

## Links
Respository Link - https://github.com/JohnNielsen1221/social-network-api
First Demo Video - https://drive.google.com/file/d/1M0mSu5gXZ-dSHD84BlUNgez6BeZPVT2z/view
Second Demo Video - https://drive.google.com/file/d/180lpxIExVxb-Yaof3Z-wIU3k5mQmG1Kk/view

## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact
Created by John Hayes Nielsen - johnhayesnielsen@gmail.com

