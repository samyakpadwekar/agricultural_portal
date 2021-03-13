# Agricultural Portal :

## ADMIN :

### GET ALL CUSTOMER

```json
METHOD: GET
http://localhost:8080/admin/list-all-customer
```

### GET ALL SELLER

```json
METHOD: GET
http://localhost:8080/admin/list-all-seller
```

### Add Category

```json
METHOD: POST
http://localhost:8080/admin/add-category

Body:Raw:JSON:

{
    "catName" : "category2",
	"description": "this is a desc of cat2",
	"picture" : "null"
}

```

### Edit Category

```json
METHOD: PUT
http://localhost:8080/admin/edit-category/2

Body:Raw:JSON:

{
    "catName" : "category2",
	"description": "this is a desc of cat2",
	"picture" : "null"
}
```

### Delete Category

```json
METHOD: DELETE
http://localhost:8080/admin/delete-category/1

```

### Delete Product by Name

```json
METHOD: GET
http://localhost:8080/admin/search-product-by-category/category2

```

## USER :

### Login

```json
METHOD: POST
http://localhost:8080/user/login

```

## SELLER:

### Edit Profile

```json
METHOD: PUT
http://localhost:8080/seller/update-profile

Body:Raw:JSON:

{
		"sellerId": 1,
		"firstName": "seller1",
		"lastName": "seller1",
		"businessName": "seller1business",
		"email": "seller1@gmail.com",
		"mobileNo": "+911111111111",
		"password": "abc#1234",
		"gstin": "12ABCDE2131KK91",
		"regDate": "2019-01-15",
		"address": {
				"pinCode": "421116",
				"line1": "line1",
				"line2": "line2",
				"landMark": "sellerlandMark",
				"city": "Mehsana",
				"state": "Gujarat",
				"country": "India"
		},
		"bankDetail": {
				"ifscCode": "HDFC01111",
				"accNo": "11111111111"
		},
		"status": "ACTIVE"
}
```

### Get seller's product list

```json
METHOD: GET
http://localhost:8080/seller/list-all-products/1

Body:Raw:JSON:

```

### Add product

```json
METHOD: POST
http://localhost:8080/seller/add-product/3/1
/3(sellerid)/1(categoryid)
Body:Raw:JSON:
{
    "brandName": "Ajay Industries",
    "productName": "A-I PKV Mini Dall Mill Machine",
    "productDescription": "PKV Mini Dall Mill Machine",
    "price": 93500.0,
    "unitsStock": 30,
    "unitsSold": 10,
    "discount": 17,
    "picture": null
}

```

### Delete product

```json
METHOD: DELETE
http://localhost:8080/seller/delete-product/3

Body:Raw:JSON:

```

### Update product

```json
METHOD: PUT
http://localhost:8080/seller/edit-product

Body:Raw:JSON:
{
    "productId": 5,
    "brandName": "Tata",
    "productName": "Sugar cane",
    "productDescription": "Gannna",
    "category": {
        "categoryId": 3,
        "catName": "Crops",
        "description": "Wheat,rice,sugarcane etc"
    },
    "price": 50000.0,
    "unitsStock": 20,
    "unitsSold": 10,
    "discount": 10,
    "avgRating": null,
    "picture": null
}

```