## Ticketyangu APP API Endpoints

This document defines the **endpoints** for the *REST* api for the ticketyangu app

### Examples
> Source file: routes/example.route.js

| Endpoint | Method | Description
| -------- | ------ | -----------
/examples | POST | Creates a new example and saves to the database
```javascript
// Request api-domain.com/examples/1
{
  data: {
    // All of the required fields to create a new example
    attribute1: 'attribute_one', 
    attribute2: 'attribute_two', 
  }
}

// Response Status Code: 200
{
  success: true,
}
```

| Endpoint | Method | Description
| -------- | ------ | -----------
/examples/:id | GET | Return info about a particular example
```javascript
// Request api-domain.com/examples/1
No payload

// Response Status Code: 200
{
  success: true,
  data: {
    attribute1: 'attribute_one', 
    attribute2: 'attribute_two', 
  }
}
```

| Endpoint | Method | Description
| -------- | ------ | -----------
/examples/:id | PUT | Update info about a given example
```javascript
// Request api-domain.com/examples/1
{
  data: {
    // Any of the fields of the example you would like to update (1 or more)
    attribute1: 'attributeOne',
    ...
  }
}

// Response Status Code: 200
{
  success: 'true',
}
```

| Endpoint | Method | Description
| -------- | ------ | -----------
/examples/:id | DELETE | Delete info about a given example
```javascript
// Request api-domain.com/examples/1
No payload

// Response Status Code: 200
{
  success: 'true',
}
```