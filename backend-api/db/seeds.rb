User.create(name: 'Ben')
User.create(name: 'Tom')
User.create(name: 'Jules')

Store.create(name: 'Electronics', content: 'We sell electronics!', image: 'This is a picture', user_id: 1)
Store.create(name: 'Toys', content: 'We sell toys!', image: 'This is a picture', user_id: 2)
Store.create(name: 'Clothes', content: 'We sell clothes!', image: 'This is a picture', user_id: 3)

Item.create(name: 'Television', content: 'High quality display.', price: 100, store_id: 1)
Item.create(name: 'Hoverboard', content: 'Fun to ride!', price: 100, store_id: 2)
Item.create(name: 'Shirt', content: 'Only the finest felts were used in this masterpiece.', price: 100, store_id: 3)

UserItem.create(user_id: 1, item_id: 2, quantity: 1)
UserItem.create(user_id: 2, item_id: 3, quantity: 2)
UserItem.create(user_id: 3, item_id: 1, quantity: 3)

User.all[0].update(store_id: 1)
User.all[1].update(store_id: 2)
User.all[2].update(store_id: 3)