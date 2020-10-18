const express = require("express")
const { from, where, limit } = require("../dbConfig")
const db = require("../dbConfig");

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json({
			message: "Welcome to blahhh",
		})
	} catch (err) {
		next(err)
	}
})

router.get("/", async (req, res, next) => {
    try{

    const account = await db.select("*").from("accounts")
    res.json(account)
    }catch(err){
        next(err)
    }
    
    })
    
    router.get("/:id", async (req, res, next) => {
        try{
            const [accounts] = await db
            .select("*")
            .from("accounts")
            .where("id",  req.params.id)
            .limit(1)
    
        res.json(accounts)
        }catch(err){
            next(err)
        }
        
    })

    router.put("/:id", async (req, res, next) => {
        try{
            const payload={
                title: req.body.name,
                budget:req.body.budget
            }
            if (!payload.name || !payload.budget){
                return res.status(400).json({
                    message: "need title and content"})
            }
            await db("messages").where("id", req.params.id).update(payload)
    
            const message = await db
            .first("*")
            .from("accounts")
            .where("id",  req.params.id)
         
            res.json(message)
            }catch(err){
                next(err)
            }
    })

    router.post("/", async (req, res, next) => {
        try{
           const payload={
               name: req.body.name,
               budget:req.body.budget
           }
           if (!payload.name || !payload.budget){
               return res.status(400).json({message: "need title and content"})
           }
           const message = await db.insert(payload).into("messages")
        
            res.json(message)
            }catch(err){
                next(err)
            }
    })

    router.delete("/:id", async (req, res, next) => {
        try{
            await db ("accounts").where("id",req.params.id).del()
            res.json(204).end()
            }catch(err){
                next(err)
            }
    })
    module.exports = router