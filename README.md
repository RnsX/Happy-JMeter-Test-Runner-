# Happy-JMeter-Test-Runner-
## Multiple system instance runs in parallel
- Duplicate Thread Groups per system
- Use per system specific .csv configuration file
- Setup concurrency (threads) in each thread group (for different load per system instance)

## Configuration .csv
### How config table is used:
<img width="1771" height="518" alt="image" src="https://github.com/user-attachments/assets/73133a5a-1f94-4fec-910c-f7f52df83181" />
### Result example:

```json
{
    "<MySEPA>NoHIT</MySEPA>|SYS01::STAGE|NO_HIT|OUT|ISO": 9897,
    "<MySWIFT>NoHIT</MySWIFT>|SYS02::STAGE|NO_HIT|OUT|MT": 9031,
    "<MySWIFT>HIT<MySWIFT/>|SYS02::STAGE|HIT|OUT|MT": 969,
    "<MySEPA>HIT<MySEPA/>|SYS01::STAGE|HIT|OUT|ISO": 103
}
```

## NodeJS web server (for testing):
- Call GET method for localhost:3000/values to get the number of requests per type to test if your configuration .csv and thread group matches the payment volume split you want to see 
