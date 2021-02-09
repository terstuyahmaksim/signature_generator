# signature_generator

To generate templates, you must place the res.json file in the root folder with the project.

## Data format

```json
[
  {
    "user": {
      "firstName": string,
      "lastName": string,
      "email": string,
      "employeeprofile": {
        "phone": string,
        "avatar": string,
        "position": {
          "title": string
        }
      }
    }
  },
];
```

## Run script:

`node template.js`
