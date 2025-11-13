---
title: "Building a Real-Time Location Alert System"
date: "2024-10-28"
excerpt: "Deep dive into creating a scalable proximity-based alert system using Redis, WebSockets, and geospatial queries for real-time notifications."
tags: ["Node.js", "Redis", "WebSocket", "Geospatial", "Real-time"]
image: "/blog/covers/real-time-location-alerts.jpg"
readTime: "10 min read"
---

# Building a Real-Time Location Alert System

Location-based services are everywhere, but building truly real-time proximity alerts at scale is challenging. Here's how I built a system that handles thousands of concurrent users with sub-second latency.

## The Challenge

Create a system where users can:

- Set location-based alerts
- Receive instant notifications when entering/leaving areas
- Handle offline scenarios gracefully
- Scale to thousands of concurrent users

## Architecture Overview

```
Client (React) ↔ WebSocket ↔ Node.js Server ↔ Redis ↔ MongoDB
```

### Key Components:

1. **WebSocket Server** - Real-time communication
2. **Redis** - Geospatial indexing & pub/sub
3. **MongoDB** - Persistent storage
4. **React Client** - Interactive map interface

## Redis Geospatial Magic

Redis's geospatial commands are perfect for proximity detection:

```javascript
// Add user location
await redis.geoadd("users:locations", longitude, latitude, userId);

// Find nearby users within 1km
const nearby = await redis.georadius(
  "users:locations",
  longitude,
  latitude,
  1,
  "km"
);
```

## Real-Time Updates with WebSockets

```javascript
// Server-side WebSocket handler
io.on("connection", (socket) => {
  socket.on("location-update", async (data) => {
    const { userId, lat, lng } = data;

    // Update Redis location
    await updateUserLocation(userId, lat, lng);

    // Check for proximity alerts
    const alerts = await checkProximityAlerts(userId, lat, lng);

    // Broadcast to relevant users
    alerts.forEach((alert) => {
      io.to(alert.targetUser).emit("proximity-alert", alert);
    });
  });
});
```

## Offline Queue Management

Handling offline scenarios was crucial:

```javascript
class OfflineQueue {
  constructor() {
    this.queue = [];
    this.isOnline = navigator.onLine;
    this.setupEventListeners();
  }

  async processQueue() {
    while (this.queue.length > 0 && this.isOnline) {
      const item = this.queue.shift();
      try {
        await this.sendToServer(item);
      } catch (error) {
        this.queue.unshift(item); // Put back on failure
        break;
      }
    }
  }
}
```

## Performance Optimizations

### 1. Geospatial Indexing

Redis geospatial commands use sorted sets internally, providing O(log N) complexity for proximity queries.

### 2. Connection Pooling

```javascript
const redis = new Redis.Cluster(
  [
    { host: "redis-1", port: 6379 },
    { host: "redis-2", port: 6379 },
  ],
  {
    enableOfflineQueue: false,
    maxRetriesPerRequest: 3,
  }
);
```

### 3. Smart Broadcasting

Only notify users within the alert radius, not everyone:

```javascript
async function broadcastToProximity(location, radius, message) {
  const nearbyUsers = await redis.georadius(
    "users:locations",
    location.lng,
    location.lat,
    radius,
    "km"
  );

  nearbyUsers.forEach((userId) => {
    io.to(userId).emit("alert", message);
  });
}
```

## Frontend: Interactive Map

Using React with real-time location tracking:

```jsx
function LocationMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // WebSocket connection
    const socket = io();

    socket.on("proximity-alert", (alert) => {
      setAlerts((prev) => [...prev, alert]);
      showNotification(alert.message);
    });

    // Location tracking
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(location);
        socket.emit("location-update", location);
      },
      null,
      { enableHighAccuracy: true, maximumAge: 1000 }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
      socket.disconnect();
    };
  }, []);

  return (
    <MapContainer center={userLocation} zoom={13}>
      {/* Map implementation */}
    </MapContainer>
  );
}
```

## Challenges & Solutions

### 1. Battery Optimization

- Adaptive location update frequency
- Background processing limits
- Smart wake-up strategies

### 2. Privacy & Security

- Location data encryption
- User consent management
- Minimal data retention

### 3. Scalability

- Redis clustering
- WebSocket load balancing
- Database sharding strategies

## Results

The system handles:

- **1000+** concurrent users
- **<500ms** alert latency
- **99.9%** uptime
- **Graceful offline** handling

## Try It Live

Check out the [live demo](https://proximity-alert-system-1.onrender.com) and the [source code](https://github.com/ajinkya8010/proximity-alert-system).

## What's Next?

Planning to add:

- Machine learning for predictive alerts
- Integration with IoT devices
- Advanced geofencing shapes

Building location-aware applications? I'd love to hear about your challenges and solutions!
