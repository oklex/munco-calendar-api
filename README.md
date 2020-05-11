this is the readme file
# Todo
[x] Refactor input checking middleware to be individaully testable

[ ] Implement GET route for /organizations/:id ? include={apps, events, all}

[ ] Refactor to make definitions of 'website_key' consistent

[x] Refactor request object creation into testable utils

[ ] Refactor error messages to be more meaningful in middleware

[ ] Implement '/api/events/' routes

[ ] Prototype a notification system

[ ] Prototype a web crawler to scan for updated information


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
- middleware: 
    - checkAppIDInput: checks if ID input is valid
- controller: applications_patch_byID

DELETE /api/applications/:id
- input: none
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
