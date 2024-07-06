import { data } from "./data.js"
class Rathna {
    async list(req, res){
        res.json(data)
    }
    async create(req, res){
        let body = req?.body
        data.push(body)
        res.json(data)
    }
    async view(req, res){
        let id = req?.params?.id
        let resp = data.filter((item)=> item.id == id)
        res.json(resp)
    }
    async delete(req, res){
        let id = req?.params?.id
        let resp = data.filter((item) => item.id != id)
        res.json(resp)
    }
    async update(req, res){
        let body = req?.body
        let id = req?.params?.id
        for (var i=0; i<data.length; i++){
            if(data[i].id == id){
                data[i].name = body?.name ? body?.name : data[i]?.name
                data[i].price = body?.price ? body?.price : data[i]?.price
                data[i].location = body?.location ? body?.location : data[i]?.location
                data[i].main_store = body?.mainstore ? body?.mainstore : data[i]?.mainstore 
            }
        }
        res.json(data)
    }
}
export default Rathna