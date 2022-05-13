// imported dependencies
const express = require("express")
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// config
app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );


// construct classes
const User = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastname: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.database.mongodbObjectId()
    };
    return newUser;
};

const Company = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.name.findName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
};



app.get("/api/users/new", (req, res) => {
    const user = User();
    console.log(user);
    res.json( user );
});

app.get("/api/companies/new", (req, res) => {
    const company = Company();
    console.log(company);
    res.json( company );
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
