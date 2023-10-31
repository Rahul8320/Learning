# Nodejs Token Api

## Create Endpoint

### Request

```json
{
  "upi": "rahul@apl",
  "pin": "0192"
}
```

### Response

```json
"Account for rahul@apl created with balance 500 tokens."
```

## Transfer Endpoint

### Request

```json
{
  "fromUpi": "admin@apl",
  "toUpi": "rahul@apl",
  "amount": 200,
  "pin": "0192"
}
```

### Response

```json
"Transferred 200 tokens from admin@apl to rahul@apl"
```

## Balance Endpoint

### Request

```json
{
  "upi": "rahul@apl",
  "pin": "0192"
}
```

## Response

```json
"Balance of rahul@apl: 500"
```
