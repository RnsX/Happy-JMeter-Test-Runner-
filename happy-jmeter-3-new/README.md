# Payment screening JMeter runner

`Runner.jmx` sends XML payment screening requests. All test settings are
editable in JMeter under **Payment Screening Performance Test > Configuration**.

`BAD_ACTOR_EVERY_N=10000` makes exactly every 10,000th screening request use
`BAD_PAYMENT_BODY`. Set it to `0` to disable bad-actor requests. The request
counter is shared by all threads in one JMeter process.

The access token is cached per JMeter thread. It is fetched again before its
reported `expires_in` lifetime, allowing for a configurable safety margin. A
`401` screening response invalidates it so the next request fetches a new
token. Screening is skipped when token acquisition fails.

## Configure

Open `Runner.jmx` in JMeter and edit the User Defined Variables in
**Configuration**:

| Variable | Purpose |
| --- | --- |
| `TOKEN_*`, `CLIENT_ID`, `CLIENT_SECRET` | Token endpoint and credentials |
| `SCREEN_*` | Screening endpoint |
| `GOOD_PAYMENT_BODY`, `BAD_PAYMENT_BODY` | The two XML request bodies |
| `BAD_ACTOR_EVERY_N` | Bad payment frequency; `0` disables it |
| `TOKEN_EXPIRY_SAFETY_SECONDS` | Refresh margin before token expiry |
| `THREADS`, `RAMP_SECONDS`, `ITERATIONS` | Load profile |

## Run

```bash
jmeter -n -t Runner.jmx -l results.jtl
```
