const mongoose=require('mongoose')
const Item=mongoose.model(
    'item',
    new mongoose.Schema(
        {
            product_name:String,
            product_type:String,
            product_description:String,
            purchase_date:String,
            poduct_price:String,
              user_id: String,
                _created: Date,
                _modified: Date,
        },
        
        {
            collection: 'items'
        })
);

const getAll = ()=>{
    return new Promise((success,fail)=>{
        Item.find({},(err,items)=>{
            if(err){
                return fail(err)
            }
            return success(items)
        })
    })
}
const getOne = (id, userID) => {
    return new Promise((success, fail) => {
        Item.find({ _id: id, user_id: userID }, (err, items) => {
            if (err) {
                return fail(err);
            }
            return success(items);
        });
    });
};
const save=(items)=>{
    return new Promise((success,fail)=>{
        var i=new Item(items)
        i.save(data,err=>{
            if(err){
                return fail(err)
            }
            return success()
        })
    })
}
const replace = (id, items) => {
    return new Promise((success, fail) => {
        Item.findByIdAndUpdate(id , items, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}
const update = (id, items) => {
    return new Promise((success, fail) => {
        Product.findByIdAndUpdate(id, {$set: {items}}, err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};


const remove = (id) => {
    return new Promise((success, fail) => {
        Item.findByIdAndRemove( {id} , err => {  
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}

module.exports={
    getAll,
    save,
    getOne,
    remove,
    replace,
    update
}
