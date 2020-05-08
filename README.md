this is the readme file
# Todo
[ ] Refactor input checking middleware to be individaully testable and use express-validate-input with meaningful error messages
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
    - req.body.website_key
    - req.params.id
- middleware: 
    - checkAppIDInput: checks if ID input is valid
- controller: applications_patch_byID

DELETE /api/applications/:id
- input:
    - req.body.website_key
    - req.params.id
- middleware: 
    - checkAppIDInput: checks if ID input is valid
- controller: applications_delete_byID


## Organizations
POST /api/organizations/new
- input:
    - IOrganization
    - req.body.website_key
- middleware: 
    - checkOrgValidInput: checks if valid obj
- controller: organization_post_new

PATCH /api/organizations/single
- input:
    - req.body.website_key
- middleware: 
    - checkOrgKey: checks that website_key is valid
- controller: 
    - organization_patch_byID

DELETE /api/organizations/single
- input:
    - req.body.website_key
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
