# angular7-growthworks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Run

`npm install`
`npm start`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## About the project

This is a test project.

Data objects :

The application should provide UI for data manipulation. Example of data object provided below:

`{
  "id": 12,
  "title": "Paris",
  "color": "#d14836",
  "text": "Some long text"
}`

### UI :

  Page should contain 2 areas. Sidebar and main area.

  #### Sidebar

  Color at the left reflects color value of data object.

  - #X it is id of data object.
  - Paris, New York, etc it is title value of data object.
  - #199 item is selected now.

  #### Main area

  Should contain editable table with elements.

  Columns:

  -	Id
  -	Title
  - Color

  Below the table, should be the textarea, that reflects text value of selected at the sidebar element.

### Functionality : 

-	Add element
-	Remove element
-	Modify element

Any changes should be reflected at all components.
