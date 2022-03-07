module.exports={
    processEndpoints(endpoints){
        let data = JSON.parse(endpoints)
        let categories = {}
        let links = []
        data.forEach(endpoint => {
            if (categories[endpoint["category"]]==undefined) {
                categories[endpoint["category"]]=[]
                categories[endpoint["category"]].push(endpoint["name"])
            } else {
                categories[endpoint["category"]].push(endpoint["name"])
            }
        })
        for (const category in categories) {
            links.push({
                category:category,
                endpoints:categories[category]
            })
        }
        return {
            links:links,
            endpoints:data
        }
    }
}