```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setController(controller);

    fetch('/api/data', { signal: controller.signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setCount(data.count))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      });

    return () => controller.abort();
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```