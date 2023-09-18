
import {faker} from '@faker-js/faker';

import { getRandomArrayElement, getRandomEnumValue } from '../src/lib/utils';
import { EnquiryTypesArray } from '../src/schema/EnquirySchema';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function enquirySeed(count = 10, resetBeforeFill = true){
    const data = Array(count).fill(null).map(d => {
        const fName = faker.person.firstName();
        return {
            name: `${fName} ${faker.person.lastName()}`,
            email: faker.internet.email({firstName: fName}),
            phone: faker.phone.number(),
            type: getRandomArrayElement(EnquiryTypesArray)||''
        }
    })

    if(resetBeforeFill){
        await prisma.enquiry.deleteMany();
    }

    await prisma.enquiry.createMany({
        data
    })
}

async function seed(){
    await enquirySeed(50);
}

seed()