class HomeScreen{
    get #forms(){
        return $('=Forms')
    }

    async goToForms(){
        this.#forms.click()
    }
}
 module.exports = new HomeScreen()