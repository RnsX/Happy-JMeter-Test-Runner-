const express = require('express');

const app = express();
const PORT = 3000;

// Parse raw text bodies (this is the key part)
app.use(express.text({ type: '*/*' }));

// Hash map: { value (string) -> count }
const valueCounts = Object.create(null);

/**
 * POST /value
 * Body: raw text (e.g. "hello", "X", "abc")
 *
 * Increments count for that exact text value
 */
app.post('/value', (req, res) => {
    const value = req.body;

    if (typeof value !== 'string') {
        return res.status(400).send('Body must be plain text');
    }

    // Optional: normalize (trim). Remove if exact matching is required.
    const key = value;

    valueCounts[key] = (valueCounts[key] || 0) + 1;

    res.json({
        received: key,
        currentCount: valueCounts[key]
    });
});

/**
 * GET /values
 * Returns all aggregated counts
 */
app.get('/values', (req, res) => {
    res.json(valueCounts);
});

/**
 * Optional: reset (useful for testing)
 */
app.delete('/values', (req, res) => {
    for (const k in valueCounts) delete valueCounts[k];
    res.json({ message: 'cleared' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
