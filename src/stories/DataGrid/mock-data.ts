import { faker } from "@faker-js/faker";

export const tableData = Array(10000)
    .fill(1)
    .map((d, i) => ({
        id: i + 1,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        balance: faker.number
            .float({
                fractionDigits: 2,
                max: 1000,
            })
            .toFixed(2),
    }));
