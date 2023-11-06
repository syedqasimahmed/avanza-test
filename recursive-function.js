let arr = [
    {
        name: "John",
        childs: [
            {
                name: "Mike"
            }
            , {
                name: "Mickey",
                childs: [
                    {
                        name: "David"
                    }
                ]
            }
        ]
    },
    {
        name: "Topson",
        childs: [
            {
                name: "Jack"
            }
        ]
    }
]
// John ,  Mike -> John , Micke

// item. name , parent 
const getItem = (item, parent) => {


    let name = item.name
    if (parent?.name) {
        name = item.name + ' ' + parent?.name
    }
    console.log(name, '\n')
    if (item.childs != null) {
        for (let i = 0; i < item.childs.length; i++) {
            getItem(item.childs[i], item)
        }
    }


}

for (let i = 0; i < arr.length; i++) {
    getItem(arr[i], null)
}


