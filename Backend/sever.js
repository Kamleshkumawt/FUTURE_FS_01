import express from 'express'
import http from 'http'
import "dotenv/config.js"
import helmet from 'helmet'
import morgan from 'morgan'
import connectDB from './db/db.js'
import routes from './routes/userContact.route.js'
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import cors from 'cors'

const app = express();

// Security middleware
app.use(helmet());
app.use(compression());

// CORS middleware only allow requests from one origin
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Parse JSON and URL-encoded data
app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// HTTP request logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});

app.use('/api/', limiter);

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('Health check requested', { ip: req.ip });
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API routes
app.use('/api/w1/', routes);


// Simple route for testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

// Start the server
const startServer = async () => {
    try {
        await connectDB();
        const server = http.createServer(app);
        server.listen(PORT, () => {
            console.log('Server started successfully', {
                port: PORT,
                environment: process.env.NODE_ENV || 'development',
                healthCheck: `http://localhost:${PORT}/health`,
                apiBase: `http://localhost:${PORT}/api/w1`,
            });
        });
    } catch (error) {
        console.error('Error starting server : ',error)
        process.exit(1);
    }
};

startServer();   