# Happy-JMeter-Test-Runner-
## Multiple system instance runs in parallel
- Duplicate Thread Groups per system
- Use per system specific .csv configuration file
- Setup concurrency (threads) in each thread group (for different load per system instance)

## Configuration .csv
<img width="1771" height="518" alt="image" src="https://github.com/user-attachments/assets/73133a5a-1f94-4fec-910c-f7f52df83181" />


## NodeJS web server (for testing):
- Call GET method for localhost:3000/values to get the number of requests per type to test if your configuration .csv and thread group matches the payment volume split you want to see 
