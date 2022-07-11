const db = require("../db");

class Store {
  static async listProducts() {
    //list all posts in db in descending order of when they were created 
    try{
        const result = await db.query('SELECT * FROM products')
        const results = {products: (result) ? result.rows: null}
        res.render('pages/index', results)
        db.release()
    }
    catch(err){
        console.log(err)
        res.send("Error" + err)
    }
  }
}

module.exports = Store 
