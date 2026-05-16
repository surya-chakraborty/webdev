function calculateTotalSpentByCategory(transactions){
    const categories = {}
    transactions.forEach((t) => {
        if(!categories[t.category]){
            categories[t.category] = 0;
        }
        categories[t.category] += t.price
    })
    console.log(categories)
    return Object.keys(categories).map((category) => ({
        category,
        totalSpent: categories[category],
    }))
}

const res = calculateTotalSpentByCategory([
    {
        id: 1,
        timestamp: 157645669620,
        price: 180,
        category: 'Food',
        itemName : 'Pizza'
    }, {
        id: 2,
        timestamp: 785410068790,
        price: 600,
        category: 'Clothes',
        itemName : 'Pants'
    }, {
        id: 3,
        timestamp: 949021238000,
        price: 30,
        category: 'Food',
        itemName : 'Idli'
    }, {
        id: 4,
        timestamp: 793320078500,
        price: 400,
        category: 'Food',
        itemName : 'Shirt'
    }, {
        id: 5,
        timestamp: 860193000000,
        price: 80,
        category: 'Study',
        itemName : 'Books'
    }, {
        id: 6,
        timestamp: 4564566962000,
        price: 15,
        category: 'Study',
        itemName : 'Pen'
    }
])

console.log(res)