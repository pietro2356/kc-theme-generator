# Angular v17 Workspace Template
Basic templates for the development of Angular applications - Angular v17

* [Getting Started](#getting-started)
  * [Installing](#installing)
  * [Create a new application](#create-a-new-application)
* [Built With](#built-with)
* [Authors](#authors)
* [License](#license)


## Getting Started
This template is intended to provide a starting point for the creation of Angular workspaces, and to make it easier to manage projects


### Installing
After downloading the template, you must install the node modules with the command:
```
npm install
```
If there are problems, run the command
```
npm install --force
```

### Create a new application
To create a new project, run the command:
```
ng generate application <app-name> --prefix <app-prefix> --routing --style=scss --strict --ssr=false
```

After creating your app, go to the [`angular.json`](angular.json) file and reach the schematics section, and add the following code:
```json
{
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "app-name": {
      "projectType": "application",
      "schematics": {} // The section to reach
    }
  }
}
```
On the schematics section, add the following code:
```json
{
  "schematics": {
    "@schematics/angular:component": {
      "style": "scss",
      "standalone": true,
      "changeDetection": "OnPush",
      "displayBlock": true
    }
  }
}
```
This code will make the components created with the command `ng generate component <component-name>` have the following properties:
- Style: SCSS
- Change Detection: OnPush
- Display Block: true
- Standalone: true
- Prefix: app-prefix


## Built With
- [Angular](https://angular.dev/) - The web framework used
- [PrimeNG](https://primeng.org/) - The UI library used

## Authors
- **Pietro Rocchio**

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
