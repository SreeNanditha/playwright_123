import {test, expect } from '@playwright/test';
//import exp from 'constants';
test('API PUT REQUEST', async({request}) => {
    const response = await request.put('https://reqres.in/api/users/2',{
        data: {
            "name": "harry",
            "job": "doctor"
        }
    })

expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('harry');

    console.log(await response.json());
 })

test('API POST REQUEST', async({request}) => {
    const response = await request.post('https://reqres.in/api/users',{
        data: {
            "name": "harry",
            "job": "teacher"
        }
    })
    
expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('harry');

    console.log(await response.json());
 })

test('API GET REQUEST', async({request}) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log(await response.json());
})

test('API DELETE REQUEST', async({request}) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
})