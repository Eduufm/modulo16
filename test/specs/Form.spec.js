const homeScreen = require("../screens/home.screen");

describe('Access Form Panel', ()=>{
    it('Should fill form', async() => {
        await homeScreen.goToForms()
               
    });
})