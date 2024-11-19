# Test Veri Tabanı

## Tüm Veriler

### Url
```
{{url}}/api/test/all
```

## Tüm Veriler - Params

### Url
```
{{url}}/api/test/all?page=2&rowcount=4&order=asc
```
```
{{url}}/api/test/all?order=asc&ValueTop=15
```

## Veri Arama

### Url
```
{{url}}/api/test/find/33
```

## Veri Arama - Post

### Url
```
{{url}}/api/test/find_post
```
### POST
```
{
    "id":2
}
```

## Veri Arama - Kullanıcı

### Url
```
{{url}}/api/test/find_user?order=asc
```
```
{{url}}/api/test/find_user?page=2&rowcount=4&order=asc
```
### POST
```
{
   "created_byId": 1
}
```


## Veri Arama - Farklı

### Url
```
{{url}}/api/test/find_other?order=asc
```
```
{{url}}/api/test/find_other?page=2&rowcount=4&order=asc
```
### POST
```
{
   "value": 1
}
```

## Veri Ekleme

### Url
```
{{url}}/api/test/add
```
### POST
```
{
    "name":"name add",
    "surname":"surname add",
    "created_byId": 0
}
```

## Veri Güncelleme

### Url
```
{{url}}/api/test/edit
```
### POST
```
{   
    "id":67,
    "name":"name güncelleme",
    "surname":"surname güncelleme",
    "updated_byId": 5
}
```


## Çoklu Veri Güncelleme

### Url
```
{{url}}/api/test/edit/multi
```
### POST
```
{
    "ids": "98,34",
    "name":"name güncelleme",
    "surname":"surname güncelleme",
    "updated_byId": 5
}
```

## Veri Silme

### Url
```
{{url}}/api/test/delete/68
```
### POST
```
{
    "deleted_byId": 1
}
```

## Çoklu Veri Silme 

### Url
```
{{url}}/api/test/delete/multi
```
### POST
```
{
    "ids": "68,67",
    "deleted_byId": 1
}
```

## Geçisi Veri Silme 

### Url
```
{{url}}/api/test/delete/edit
```
### POST
```
{
    "ids":"33",
    "deleted_byId": 10
}
```
