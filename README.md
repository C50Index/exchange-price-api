# Crypto Price API

A light wrapper around APIs to easily pull data from different crypto exchanges.


<p style='text-align: center'>
  <img src='http://www.c50index.com/wp-content/uploads/2018/11/1-newlogo-1-150x150.png' />
  </br>
  <a href='https://www.c50index.com'>C50 Index</a>
</p>


## GET /exchanges
List all of the available exchanges

| Result        | Datatype  |
|:-------------:| ---------:|
| Exchange Name | string     |

## GET /symbols
List all of the available symbols

| Result        | Datatype  |
|:-------------:| ---------:|
| Symbol Name | string     |

## GET /price/:exchange/:symbol
Get the price data (USD) for a given symbol on an exchange

| Result        | Datatype  |
|:-------------:| ---------:|
| Bid | number |
| Ask | number |
| Mid | number |
| Last Price | number |
| Low | number |
| High | number |
| Volume | number |
| Bid | number |
| Timestamp | Date |

## GET /price/:symbol
The average price for a given symbol on all of the available exchanges

| Result        | Datatype  |
|:-------------:| ---------:|
| Price | number |
| Timestamp | Date |
