```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will cause an infinite loop
    setCount(count + 1);
  }, [count]); // Depends on count, causing the effect to run repeatedly

  return <div>Count: {count}</div>;
}
```