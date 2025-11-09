const {test, expect} = require('@playwright/test');
const { request } = require('http');

 var userid;
test("get user", async ({request})=> {
    const response = await request.get("url");
    console.log(response.json())

    expect (response.status()).toBe(200)

})

test("Create user", async ({request})=> {
    const response = await request.post("url",{

        data :{
            "name": "kumar",
            "job": "trainer"
        },
        
        headers:{

            "Accept": "application/josn"
        }
    })
    console.log(await response.json())
    expect (response.status()).toBe(201)
    
    var res = await response.json()
    userid = res.id
})


test("update user", async({request})=>{
    await request.put("url"+userid, 
        
        {
            data:{"name": "kumar",
                  "job": "engineer"

            },
            headers:{
                "Accept":"application.json"
            }
    })
    console.log( await response.json());
    expect(response.status()).tobe(200);
})




