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
