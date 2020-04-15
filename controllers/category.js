const Category=require('../models/category')

const getCategories=(req,res,next)=>{
    const category=await Category.find({})
    res.status(200).send(category)
}
const addCategory=async(req,res,next)=>{
    const category={name:req.body.name}
    const newCategory=new Category(category)
    const save=await newCategory.save()
    res.status(201).send({msg:"Category is added", game:save})
}
const getCategoryById=async(req,res,next)=>{
    const{id}=req.params
    const game=await Cate
}