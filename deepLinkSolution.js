The solution involves using `Linking.getInitialURL` to fetch the initial URL on app launch. This call needs to be wrapped in a promise to ensure proper handling. The event listener continues to handle subsequent URLs.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    // Get initial URL
    const getInitialUrlAsync = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    getInitialUrlAsync();

    // Add listener for subsequent URLs
    const subscription = Linking.addEventListener('url', (event) => {
      // Handle the URL
      console.log('Received URL:', event.url);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View>
      {initialUrl && (
        <Text>Initial URL: {initialUrl}</Text>
      )}
      {/* Rest of the app's UI */}
    </View>
  );
}
```