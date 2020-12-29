let data = require('./data.json')

module.exports ={
    getAllUsers: (req, res) => {
        const{email}= req.query
        if(!email) return res.status(200).send(data)
        const filteredUsers = data.filter(element =>element.email.includes(email))
        res.status(200).send(filteredUsers)
        
    },

//req.body  //req.params   //req.query
    getSingleUser: (req, res) =>{
        console.log(req.params)
        const {id} = req.params
        const user = data.find(element => element.id === +id)
        if(!user) return res.sendStatus(404)
        res.status(200).send(user)
    },



}


//axios.post('https://localhost:3456/users/3?id=3',body)