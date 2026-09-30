import{test,expect, request} from "@playwright/test";
//test("Get multiple user details",async({request})=>{
   //const response = await request.get("https://reqres.in/api/users?page=2");
   //console.log(await response.json());
   //expect (response.status()).toBe(200);

   //const responseBody=await response.json();
   //expect(responseBody.data[0].id).toBe(7);
   //expect(responseBody.data[0].email).toBe("michael.lawson@reqres.in")


//});
test("Get multiple user details",async({request})=>{
const response = await request.get("https://reqres.in/api/users?page=2");
expect(response.status()).toBe(200);
const responseBody = await response.json();
console.log(responseBody);
expect(responseBody.data[0].id).toBe(7);
expect(responseBody.data[0].email).toBe("michael.lawson@reqres.in");
});

test("Get single user details",async ({request})=>{
    const response = await request.get("https://reqres.in/api/users/2");
    console.log(await response.json());
    expect(response.status()).toBe(200);
 
    const responseBody =await response.json();
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toBe("janet.weaver@reqres.in");

});

test("User not found details",async ({request})=>{
    const response= await request.get("https://reqres.in/api/users/23");
    console.log(await response.json());
    expect(response.status()).toBe(404);

});

test("Create user details",async({request})=>{
    const response= await request.post("https://reqres.in/api/users",
        {
            data:{
                name: "morpheus",
                job: "leader"
            }
        }
    );
    expect (response.status()).toBe(201);
    const responseBody =await response.json();
    console.log(responseBody);
    expect(responseBody.name).toBe("morpheus");
    expect(responseBody.job).toBe("leader");

});

test("update user Details",async({request})=>{
const response= await request.put("https://reqres.in/api/users/2",
    {
        data:{
            name: "morpheus",
            job: "zion resident"
        }

    }
    
);
expect(response.status()).toBe(200);
const responseBody = await response.json();
console.log(responseBody);
expect(responseBody.name).toBe("morpheus");
expect(responseBody.job).toBe("zion resident");
});

test("Partially update user details",async({request})=>{
    const response = await request.patch("https://reqres.in/api/users/2",
        {
            data:{
                 job: "zion resident"
            }
        }
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.job).toBe("zion resident");
    

});
test("Delete user details",async({request})=>{
    const response = await request.delete("https://reqres.in/api/users/2")
    expect(response.status()).toBe(204);
});

test("Get list resources",async({request})=>{
    const response = await request.get("https://reqres.in/api/unknown");
    expect (response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.data[0].id).toBe(1);
    expect(responseBody.data[0].name).toBe("cerulean");
    expect(responseBody.data[0].year).toBe(2000);
    expect(responseBody.data[0].color).toBe('#98B2D1');
    expect(responseBody.data[1].id).toBe(2);
    expect(responseBody.data[1].name).toBe("fuchsia rose");
    expect(responseBody.data[1].year).toBe(2001);
    expect(responseBody.data[1].color).toBe('#C74375');
    expect(responseBody.data[1].pantone_value).toBe('17-2031');

});

test("get single resource",async({request})=>{
    const response = await request.get("https://reqres.in/api/unknown/2");
    expect (response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.name).toBe('fuchsia rose')
    expect(responseBody.data.year).toBe(2001);
    expect(responseBody.data.color).toBe('#C74375');
    expect(responseBody.data.pantone_value).toBe("17-2031");

});

test("resource not found",async({request})=>{
const response=await request.get("https://reqres.in/api/unknown/23");
expect (response.status()).toBe(404);

});

test("create register success request",async({request})=>{
const response = await request.post("https://reqres.in/api/register",
    {
        data:{
            email:"eve.holt@reqres.in",
            password:"pistol"
        }
    }
);
expect ((response).status()).toBe(200);
const responseBody = await response.json();
console.log(responseBody);
expect (responseBody.id).toBe(4);
expect(responseBody.token).toBe("QpwL5tke4Pnpja7X4");
expect(responseBody._meta.powered_by).toBe("ReqRes");
expect(responseBody._meta.docs_url).toBe("https://app.reqres.in/documentation");
expect(responseBody._meta.upgrade_url).toBe("https://app.reqres.in/upgrade");
expect(responseBody._meta.example_url).toBe("https://app.reqres.in/examples/notes-app");
expect(responseBody._meta.variant).toBe("v1_b");
expect(responseBody._meta.message).toBe("This is a read-only demo endpoint. Sign up to create your own collections with full CRUD and auth.");
expect(responseBody._meta.cta.label).toBe("Get started");
expect(responseBody._meta.cta.url).toBe("https://app.reqres.in/upgrade");
expect(responseBody._meta.context).toBe("legacy_success");

});

test("invalid registration",async({request})=>{
    const response=await request.post("https://reqres.in/api/register",
        {
            data:{
                 email: "sydney@fife"
            }
        }
    );
    expect (response.status()).toBe(400);

});
