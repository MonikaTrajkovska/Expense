const express=require('express')

const Item=require('../models/Items.js')



const getAll=(req,res)=>{
    Item.getAll()
    .then(items=>{
        res.status(200).send(items)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}
const getOne = (req, res) => {
    Item.getOne(req.params.id, req.user.id)
    .then(items => {
        res.status(200).send(items);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}
const save = (req, res) => {
    var items = req.body;
    let er = 0;
    if (items.product_name == undefined || items.product_name.length == 0) { er++; }
    if (items.product_type == undefined || items.product_type.length == 0) { er++; }
    if (items.product_description == undefined || items.product_description.length == 0) { er++; }
    if (items.purchase_date == undefined || items.purchase_date.length == 0) { er++; }
    if (items.product_price== undefined || items.product_price.length == 0) { er++; }
   

    if (er == 0) {
        Item.save({...items,user_id:req.user_id})
            .then(() => {
                res.status(201).send('Created');
            })
            .catch(err => {
                res.status(500).send(err);
            });
    } else {
        res.status(400).send('Bad request');
    }
}
const replace = (req, res) => {
    var items = req.body;
    let er = 0;
    if (items.product_name == undefined || items.product_name.length == 0) { er++; }
    if (items.product_type == undefined || items.product_type.length == 0) { er++; }
    if (items.product_description == undefined || items.product_description.length == 0) { er++; }
    if (items.purchase_date == undefined || items.purchase_date.length == 0) { er++; }
    if (items.product_price== undefined || items.product_price.length == 0) { er++; }
   

    if (er == 0) {
        Item.replace(req.params.id, items)
            .then(() => {
                res.status(204).send();
            })
            .catch(err => {
                res.status(500).send(err);
            });
    } else {
        res.status(400).send('Bad Request');
    }
}

const update = (req, res) => {
    var items = req.body;
    Item.replace(req.params.id, items) //koe id ke bide vo url toa se brise so ova req.params.id
        .then(() => {
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

const remove = (req, res) => {
    Item.remove(req.params.id)
        .then(() => {
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

module.exports={
    getAll,
    getOne,
    save,
    replace,
    update,
    remove
}