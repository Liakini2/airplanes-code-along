//your info would be stored on the database permanently.

module.exports = {
    getPlanes: (req, res) =>{
        //here we are assining db to a variable
        const db = req.app.get('db')
        //we call the variable here
        db
        //here we are calling the function get_planes from our db 
        //file which is pulling all planes
        .get_planes()
        //then we are returning that value below
        .then((planes)=>{
            res.status(200).send(planes);
        })
        .catch((err) => console.log(err));
    },
    addPlane: (req, res) =>{
        const db = req.app.get('db')
        //destructuring the variables off of body
        const {type, passengers} = req.body
        db
        //sending in values as an ARRAY using the db function
        .add_plane([type, passengers])

        //can also be passed in as an object like this
        //.add_plane({type, passengers})
        //^these can be in any order so it could be ({passenters, type}) 
        //but lets not do that lol

        //.then sends the new values for planes
        .then((planes)=>{
            res.status(200).send(planes)
        })
        .catch((err)=> console.log(err))
    }, 
}