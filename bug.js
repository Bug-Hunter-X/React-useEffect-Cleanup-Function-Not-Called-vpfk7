```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here.  The return value of the effect function
    // is ignored, meaning cleanup will not run.
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setCount(data.count));
  }, []);

  return <div>Count: {count}</div>;
}
```