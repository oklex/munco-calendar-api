# MUNCO Calendar API
This api organizes organization, event, and application data for Model UN organizations aroudn Vancouver, BC. 

munco.ca
heroku link: munco-calendar.herokuapp.com
aws link: calendar.munco.ca

## How to use
Pre-requisites:
- have node installed
- set-up env variables for Firebase
```npm install```
```npm start```

# IN-PROGRESS
[ ] Prototype a notification system
[ ] Testing 'events' routes

# TO-DO
[ ] Prototype a web crawler to scan for updated information
[ ] Add admin accounts (for secure requests)


# Implemented Routes
## Applications
GET /api/applications/all
- input: none
- middleware: none
- controller: prototype

GET /api/applications/upcoming
- input: none
- middleware: none
- controller: prototype

POST /api/applications/new
- input: 
    - interface ICalendarResponse
    - req.body.website_key
- middleware: 
    - checkValidInput: checks if valid obj
- controller: applications_create_new

PATCH /api/applications/:id
- input:
    - req.params.id
    - IApplicationRequest
- middleware: 
    - checkAppIDInput: checks if ID input is valid
- controller: applications_patch_byID

DELETE /api/applications/:id
- input: 
    - req.body.website_key
- middleware: 
    - checkAppIDInput: checks if ID input is valid
- controller: applications_delete_byID


## Organizations
GET /api/organizations/all
- input: none
- middleware: none
- controller: organizations_get_all

GET /api/organizations/:id
- input: none
- middleware: none
- controller: organizations_get_byID

POST /api/organizations/new
- input:
    - IOrganization
    - req.body.website_key
- middleware: 
    - checkOrgValidInput: checks if valid obj
- controller: organization_post_new

PATCH /api/organizations/:id
- input:
    - req.body.website_key
- middleware: 
    - checkOrgKey: checks that website_key is valid
- controller: 
    - organization_patch_byID

DELETE /api/organizations/:id
- input: none
- middleware: 
    - checkOrgKey: checks that website_key is valid
- controller: 
    - organization_delete_byID


# TBA Routes
## Organizations
GET /api/organizations/all
- middleware:
- controller: 

GET /api/organizations/:id
- middleware: 
- controller: 


## Events
POST /api/events/new
- middleware: 
- controller: 

PATCH /api/events/:id
- middleware: 
- controller: 

DELETE /api/events/:id
- middleware: 
- controller: 

GET /api/events/all
- middleware: 
- controller: 

GET /api/events/upcoming
- middleware: 
- controller: 
